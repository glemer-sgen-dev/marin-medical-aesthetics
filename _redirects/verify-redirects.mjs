#!/usr/bin/env node
/* verify-redirects.mjs — acceptance test for the 301 ordinance's same-domain rows.
 *
 * Run it BEFORE applying to see what is outstanding, and AFTER applying to prove
 * each rule is in force. Node 18+ (uses global fetch). No dependencies.
 *
 *   node _redirects/verify-redirects.mjs
 *
 * Exit 0 = every READY and ALREADY-LIVE row behaves as specified.
 * Exit 2 = at least one is wrong (not applied, wrong destination, or wrong code).
 *
 * OWNER-DECISION rows are reported but never failed on: they are deliberately
 * not implemented, so "still 200" is the correct state for them, not a defect.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = process.env.REDIRECT_BASE || 'https://www.marinmedicalaesthetics.com';
const here = path.dirname(fileURLToPath(import.meta.url));

// naive CSV split that respects the one quoted field (note) at the end
function parse(line) {
  const out = [];
  let cur = '', q = false;
  for (const ch of line) {
    if (ch === '"') { q = !q; continue; }
    if (ch === ',' && !q) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out;
}

const rows = fs.readFileSync(path.join(here, 'redirects.csv'), 'utf8')
  .trim().split(/\r?\n/).slice(1)
  .map(parse)
  .map(([source, target, code, status]) => ({ source, target, code: Number(code), status }));

async function probe(url) {
  try {
    const r = await fetch(url, { redirect: 'manual' });
    return { status: r.status, location: (r.headers.get('location') || '').replace(BASE, '') };
  } catch (e) {
    return { status: 0, location: '', error: e.message };
  }
}

let failed = 0, checked = 0;
console.log(`\nverify-redirects — ${BASE}\n`);

for (const r of rows) {
  const got = await probe(BASE + r.source);
  const expectCode = r.code;
  const enforced = r.status === 'READY' || r.status === 'ALREADY-LIVE';

  let ok, detail;
  if (expectCode === 410) {
    ok = got.status === 410;
    detail = `expected 410, got ${got.status}${got.location ? ` -> ${got.location}` : ''}`;
  } else {
    const destOk = !r.target || got.location.replace(/\/$/, '') === r.target.replace(/\/$/, '');
    ok = got.status === expectCode && destOk;
    detail = `expected ${expectCode} -> ${r.target}, got ${got.status}${got.location ? ` -> ${got.location}` : ''}`;
  }

  if (enforced) {
    checked++;
    if (!ok) failed++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} [${r.status}] ${r.source}`);
    if (!ok) console.log(`        ${detail}`);
  } else {
    // owner-decision: report only, never fail
    console.log(`  --   [${r.status}] ${r.source}  (not implemented by design; currently ${got.status})`);
  }
}

console.log(
  failed
    ? `\nFAIL — ${failed} of ${checked} enforced rule(s) are not in force.\n`
    : `\nPASS — all ${checked} enforced rule(s) behave as specified.\n`
);
process.exit(failed ? 2 : 0);
