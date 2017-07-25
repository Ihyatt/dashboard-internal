
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('array-index', 'helper:array-index', {
  integration: true
});

test('it renders', function(assert) {
  this.set('array', [1,2,3,4]);
  this.set('input', 2);

  this.render(hbs`{{array-index array input}}`);

  assert.equal(this.$().text().trim(), 3);
});