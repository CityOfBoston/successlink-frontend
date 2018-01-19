import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:dashboard/staff/lottery', 'Unit | Controller | dashboard/staff/lottery', {
  // Specify the other units that are required for this test.
  needs: ['service:lotteryStatus', 'service:session', 'service:ajax']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
