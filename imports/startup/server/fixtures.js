import { Meteor } from 'meteor/meteor';
import { Answers } from '../../api/answers/answers.js';
import { Quizes } from '../../api/quizes/quizes.js';
import { Questions } from '../../api/questions/questions.js';
import { Options } from '../../api/options/options.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Quizes.find().count() === 0) {
     Factory.create('quiz');
  }
});
