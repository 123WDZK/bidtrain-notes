import assert from 'node:assert/strict';
import fs from 'node:fs';
import { lessons, stages, getPlan } from '../lib/course.ts';
assert.equal(lessons.length,12);
assert.equal(new Set(lessons.map(l=>l.id)).size,12);
for(const l of lessons){assert.ok(l.correct>=0&&l.correct<l.options.length);assert.ok(l.task&&l.source&&l.deliverable);}
assert.equal(stages.length,8);
const p=getPlan(6);assert.equal(p.weeks,10);assert.equal(p.phases.reduce((n,p)=>n+p.hours,0),p.total);
assert.equal(getPlan(10).weeks,6);assert.equal(getPlan(0).hours,2);assert.equal(getPlan(25).hours,20);assert.equal(getPlan(NaN).hours,6);
const sources=JSON.parse(fs.readFileSync(new URL('../lib/sources.json',import.meta.url),'utf8'));
assert.equal(sources.materials.length,10);assert.equal(sources.policies.length,40);
assert.equal(new Set(sources.policies.map(p=>p.url)).size,40);
for(const m of sources.materials)assert.ok(fs.existsSync(new URL('../public'+m.url,import.meta.url)));
console.log('PASS: curriculum, plan bounds, phase totals, source counts and all 10 local material files.');
