import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('youth-job-list', 'Integration | Component | youth job list', {
  integration: true
});

test('it renders', function(assert) {
  let model = {
    hasReachedMaxPositions: false,
    positions: [],
  }
  this.set('model', model);

  this.render(hbs`{{youth-job-list model=model}}`);
  let result = String(this.$().text().trim())
  assert.ok(result.includes('YOUR JOB LIST'));
  assert.ok(result.includes('You have an interest in 0/10 jobs'));
});
