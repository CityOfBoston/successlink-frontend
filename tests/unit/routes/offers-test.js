import { moduleFor, test } from 'ember-qunit';

moduleFor('route:offers', 'Unit | Route | offers', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
