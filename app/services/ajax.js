import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment'

export default AjaxService.extend({
  host: config.host,
  namespace: config.namespace,
  authorizer: 'authorizer:application',
  session: Ember.inject.service(),
  headers: Ember.computed('session.session.authenticated.access_token', {
    get() {
      let headers = {};
      let authorizer = this.get('authorizer');
      this.get('session').authorize(authorizer, (name, value) => {
        headers[name] = value;
      });
      return headers;
    }
  })
});