import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('../records.json').then(function(response) {
      return response;
    });
  },
});
