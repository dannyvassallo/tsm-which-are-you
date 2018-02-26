import { Meteor } from 'meteor/meteor';
import { Quizes } from '../../api/quizes/quizes.js';

// import { Questions } from '../../api/questions/questions.js';
// import { Options } from '../../api/options/options.js';

Meteor.startup(() => {
  // seed Quizes collection if it is empty
  if (Quizes.find().count() === 0) Factory.create('quiz');
});
