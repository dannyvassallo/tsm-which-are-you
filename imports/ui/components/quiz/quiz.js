import { Template } from 'meteor/templating';
import { Quizes } from '../../../api/quizes/quizes.js';

import './quiz.html';
import '../quizQuestions/quizQuestions.js';
import '../quizHeader/quizHeader.js';

Template.quiz.helpers({
  header: () => Quizes.findOne().header,
  questions: () => Quizes.findOne().questions,
});
