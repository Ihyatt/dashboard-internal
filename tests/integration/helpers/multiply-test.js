
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('multiply', 'helper:multiply', {
  integration: true
});

test('it renders', function(assert) {
  this.set('input1', 2);
  this.set('input2', 2);

  this.render(hbs`{{multiply input1 input2}}`);

  assert.equal(this.$().text().trim(), 4);
});