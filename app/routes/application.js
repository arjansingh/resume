import Ember from 'ember';
import contactInfo from 'arjans-resume/data/contact';
import education from 'arjans-resume/data/education';
import experience from 'arjans-resume/data/jobs';
import skills from 'arjans-resume/data/skills';

export default Ember.Route.extend({
  model: function () {
    return {
      'contact': contactInfo,
      'education': education,
      'experience': experience.splice(0,3),
      'skills': skills
    };
  }
});
