import DS from 'ember-data';
import Model from 'ember-data/model';

export default Model.extend({
  nodes: DS.attr('number'),
  sites: DS.attr('number'),
  size: DS.attr('number'),
  year: DS.attr('number')
});