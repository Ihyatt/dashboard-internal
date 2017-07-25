/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dashboards',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }, 

    host: 'https://4x1srr3v59.execute-api.us-east-1.amazonaws.com', 

    namespace: 'dev'
  };
  
  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'overview',
    routeIfAlreadyAuthenticated: 'overview',
    authenticationRoute:'login'
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
  }

  if (environment === 'test') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};