import Ember from 'ember';

var data = {};

export default Ember.Route.extend({
  model: function () {
    return data;
  }
});
