import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('overview-table', 'Integration | Component | overview table', {
  integration: true
});

test('it renders', function(assert) {
  let fakeData = [{
    nodes: 1,
    sites: 10,
    size: 100,
    year: 2017,
  },
  {
    nodes: 2,
    sites: 20,
    size: 200,
    year: 2016,
  }];
  
  this.set('data', fakeData);
  this.render(hbs`{{overview-table data=data}}`);
  assert.equal(this.$().find('.year-title').text().trim(),'Year');
  assert.equal(this.$().find('.table__body__row:first-child .year-item').text().trim(), 2017);
  assert.equal(this.$().find('.table__body__row:first-child .site-item').text().trim(), 10);
  assert.equal(this.$().find('.last-total-mw-added').text().trim(), 300000000);
});