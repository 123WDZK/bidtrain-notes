import assert from 'node:assert/strict';
import fs from 'node:fs';
import { lessons, stages, sourceBank, taskLabs, capstoneTasks, intensiveWeeks, getPlan } from '../lib/course.ts';
assert.equal(lessons.length,18);
assert.equal(new Set(lessons.map(l=>l.id)).size,18);
assert.deepEqual([...new Set(lessons.map(l=>l.track))].sort(),['bid','common','org']);
for(const l of lessons){
  assert.equal(l.knowledge.length,5);
  assert.ok(l.memory.length>=3);
  assert.equal(l.questions.length,10);
  assert.ok(l.task&&l.deliverable&&l.goal&&l.gate&&l.sourceIds.length);
  const lab=taskLabs[l.id];
  assert.ok(lab&&lab.brief&&lab.model);
  assert.equal(lab.steps.length,4);
  assert.equal(lab.template.length,4);
  assert.ok(lab.criteria.length>=3);
  for(const q of l.questions) assert.ok(q.correct>=0&&q.correct<q.options.length&&q.explanation);
}
assert.equal(stages.length,8);
assert.equal(sourceBank.length,12);
assert.equal(capstoneTasks.length,5);
assert.equal(intensiveWeeks.length,13);
const p=getPlan(12);assert.equal(p.weeks,20);assert.equal(p.phases.reduce((n,p)=>n+p.hours,0),p.total);
assert.equal(getPlan(8).weeks,30);assert.equal(getPlan(0).hours,8);assert.equal(getPlan(25).hours,24);assert.equal(getPlan(NaN).hours,12);
const sources=JSON.parse(fs.readFileSync(new URL('../lib/sources.json',import.meta.url),'utf8'));
assert.equal(sources.materials.length,10);assert.equal(sources.policies.length,40);
assert.equal(new Set(sources.policies.map(p=>p.url)).size,40);
for(const m of sources.materials)assert.ok(fs.existsSync(new URL('../public'+m.url,import.meta.url)));
console.log('PASS: 18 complete teaching units with 4-step assignment labs, 4-field deliverables, 10-question checks, and source coverage.');
