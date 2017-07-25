import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/analysis_by_year')
      .then(years => years.sortBy('year'));
    }
});