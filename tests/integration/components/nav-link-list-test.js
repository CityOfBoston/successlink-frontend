import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-link-list', 'Integration | Component | nav link list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('accountType', 'youth');
  this.render(hbs`{{nav-link-list accountType=accountType}}`);
  let result = String(this.$().text().trim())
  assert.ok(result.includes('VIEW STATUS'));

});
