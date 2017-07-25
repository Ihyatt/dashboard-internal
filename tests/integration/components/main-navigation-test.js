import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let stubService = Ember.Service.extend({
  isAuthenticated: true
});

moduleForComponent('main-navigation', 'Integration | Component | main navigation', {
  integration: true,
  beforeEach: function () {
    this.register('service:session', stubService);
    this.inject.service('session');
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{main-navigation}}`);
  assert.equal(this.$().find('#logout').text().trim(),'Logout');
});