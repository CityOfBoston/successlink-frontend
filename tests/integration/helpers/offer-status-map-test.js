
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('offer-status-map', 'helper:offer-status-map', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'offer_sent');

  this.render(hbs`{{offer-status-map inputValue}}`);

  assert.equal(this.$().text().trim(), 'Offer Sent');
});

