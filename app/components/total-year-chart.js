import Ember from 'ember';
import defaultTheme from '../themes/default-theme';

export default Ember.Component.extend({
  accumulateItems: function(data){
    let sums = 0;
    return data.map(item => sums += item);
  },
  chartOptions: Ember.computed('data', 'title', 'text', function(){
    let { data, text, title } = this.getProperties('data','text', 'title');
    let years = data.mapBy('year');
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text
        }
      }
    };
  }),
  content: Ember.computed('data','type','name', 'multiplier', function() {
    let { data, type, name, multiplier } = this.getProperties('data','type', 'name', 'multiplier');
    let dataSet = data.mapBy(type);
    let multiDataSet = dataSet.map(data => data * multiplier);
    let accumulatedData = this.accumulateItems(multiDataSet);
    return [{
      name,
      data: accumulatedData
    }];
  }),
  theme: defaultTheme
});