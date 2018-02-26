import { Template } from 'meteor/templating';
import { Quizes } from '../../../api/quizes/quizes.js';

import './quiz.html';
import '../quizQuestions/quizQuestions.js';
import '../quizHeader/quizHeader.js';

Template.quiz.helpers({
  header: () => {
    const quiz = Quizes.findOne();

    return quiz ? quiz.header : '';
  },
  questions: () => {
    const quiz = Quizes.findOne();

    return quiz ? quiz.questions : '';
  },
});
