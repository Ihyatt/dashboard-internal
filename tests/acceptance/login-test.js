import { test } from 'qunit';
import moduleForAcceptance from 'dashboards/tests/helpers/module-for-acceptance';
import { invalidateSession } from '../helpers/ember-simple-auth';
import config from '../../config/environment'

moduleForAcceptance('Acceptance | login');

test('visiting /login without authentication', function(assert) {
  invalidateSession(this.application);
  visit('/login');
  andThen(() => assert.equal(currentURL(), '/login'));
});

test('test login', function(assert) {
  let token_body = {
    access_token: 'gvSkMer7hZpw9iZsBZ4r'
  };
  server.pretender.post(`${config.host}/${config.namespace}/token`, function(){
    return [ 201, {'Content-Type': 'application/x-www-form-urlencoded' }, JSON.stringify(token_body) ];
  });
  visit('/login');
  fillIn('#username', 'inas.hyatt@locusenergy.com');
  fillIn('#password', 'SECRET');
  andThen(() => { click('#login') });
  let analysis_by_year_body = [];
  server.pretender.get(`${config.host}/${config.namespace}/analysis_by_year`, function(){
    return [ 201, {'authorization': `Bearer ${token_body.access_token}`}, JSON.stringify(analysis_by_year_body)];
  });
  andThen(() => assert.equal(currentURL(), '/overview'));
});