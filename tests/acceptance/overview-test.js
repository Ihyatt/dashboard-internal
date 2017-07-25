import { test } from 'qunit';
import moduleForAcceptance from 'dashboards/tests/helpers/module-for-acceptance';
import { invalidateSession } from '../helpers/ember-simple-auth';
import config from '../../config/environment'

moduleForAcceptance('Acceptance | overview');

test('visiting /overview without authentication', function(assert) {
  invalidateSession(this.application);
  visit('/overview');
  andThen(() => assert.equal(currentURL(), '/login'));
});

test('visiting /overview with authentication', function(assert) {
  let token_body = {
    access_token: 'gvSkMer7hZpw9iZsBZ4r'
  };
  server.pretender.post(`${config.host}/${config.namespace}/token`, function(){
    return [ 201, {'Content-Type': "application/x-www-form-urlencoded" }, JSON.stringify(token_body) ];
  });
  visit('/login');
  fillIn('#username', 'inas.hyatt@locusenergy.com');
  fillIn('#password', 'SECRET');
  andThen(() => { click('#login') });
  let analysis_by_year_body = [];
  server.pretender.get(`${config.host}/${config.namespace}/analysis_by_year`, function(){
    return [ 201, {'authorization': `Bearer ${token_body.access_token}`}, JSON.stringify(analysis_by_year_body)];
  });
  visit('/overview');
  andThen(() => assert.equal(currentURL(), '/overview'));
});

test('checking for overview data', function(assert) {
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
  visit('/overview');
  andThen(() => {
    assert.equal(find('.highcharts-container').length, 4),
    assert.equal(find('.table').length, 1)
  });
});