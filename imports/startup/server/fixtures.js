import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

import { Quizes } from '../../api/quizes/quizes.js';

Meteor.startup(() => {
  // seed Quizes collection if it is empty
  if (Quizes.find().count() === 0) Factory.create('quiz');
});
