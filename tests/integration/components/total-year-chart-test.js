import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('total-year-chart', 'Integration | Component | total year chart', {
  integration: true
});

test('it renders', function(assert) {
  let fakeData = [];
  let title = 'Total MW (DC) Per Year';
  let type = 'size';
  this.set('data', fakeData);
  this.set('title', title);
  this.set('type', type);
  this.render(hbs`{{total-year-chart data=data type=type title=title}}`);
  assert.equal(this.$().find('.container').length, 1);
  assert.equal(this.$().find('.highcharts-series').length, 1);
});