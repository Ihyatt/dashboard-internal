import Ember from 'ember';

export function arrayIndex([array, index]) {
  return array.objectAt(index);
}

export default Ember.Helper.helper(arrayIndex);