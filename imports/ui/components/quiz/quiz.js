import { Template } from 'meteor/templating';
import { Quizes } from '../../../api/quizes/quizes.js';

import './quiz.html';
import '../quizQuestions/quizQuestions.js';
import '../quizHeader/quizHeader.js';
import '../shareResult/shareResult.js';

Template.quiz.helpers({
  // this will serve as the quiz context for the template
  quiz: () => {
    // const { _id } = Template.instance().data;
    // const quiz = Quizes.findOne(_id);

    const quiz = Quizes.findOne();
    // console.log(quiz);

    return quiz;
  },
});
