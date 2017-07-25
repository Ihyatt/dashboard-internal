import Ember from 'ember';

export default Ember.Component.extend({
  accumulated:function(array){
    let sums = 0;
    return array.map(item => sums += item);
  },
  totalSites: Ember.computed('data', function(){
    let sites = this.get('data').mapBy('sites');
    return this.accumulated(sites);
  }),
  totalNodes: Ember.computed('data', function(){
    let nodes = this.get('data').mapBy('nodes');
    return this.accumulated(nodes);
  }),
  totalMW: Ember.computed('data', function(){
    let kws = this.get('data').mapBy('size');
    let KWToMW = kws.map(kw => kw * 1e6);
    return this.accumulated(KWToMW);
  })
});