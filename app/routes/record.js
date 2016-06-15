import Ember from 'ember';

export default Ember.Route.extend({
  model(record) {

    return Ember.$.getJSON('../records.json').then(function(response) {
      console.log(record);
      console.log(response.records[record.id]);
      return response.records[record.id];
    });
  },
});
