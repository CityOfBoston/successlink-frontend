import Ember from 'ember';
import UpdateMapBoundsMixin from 'successlink/mixins/update-map-bounds';
import { module, test } from 'qunit';

module('Unit | Mixin | update map bounds');

// Replace this with your real tests.
test('it works', function(assert) {
  let UpdateMapBoundsObject = Ember.Object.extend(UpdateMapBoundsMixin);
  let subject = UpdateMapBoundsObject.create();
  assert.ok(subject);
});
