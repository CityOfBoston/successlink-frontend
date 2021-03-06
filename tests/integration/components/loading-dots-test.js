import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loading-dots', 'Integration | Component | loading dots', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('text', 'loading')
  this.render(hbs`{{loading-dots text=text}}`);

  assert.equal(this.$().text().trim(), 'loading');
});
