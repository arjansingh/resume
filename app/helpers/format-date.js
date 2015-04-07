import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (date, format) {
  /* global moment */
  return date === '0000-00' ?
    'Present' :
    moment(date, "YYYY-MM").format(format);
});
