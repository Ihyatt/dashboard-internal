import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  session: service('session'),
  actions: {
    authenticateWithOAuth2() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});