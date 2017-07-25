import Ember from 'ember';

export function multiply([a,b]) {
  return a * b;
}

export default Ember.Helper.helper(multiply);