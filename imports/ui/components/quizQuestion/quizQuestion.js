import { Template } from 'meteor/templating';
import { Questions } from '../../../api/questions/questions.js';

import './quizQuestion.html';
import '../questionOptions/questionOptions.js';
import '../questionHeader/questionHeader.js';

Template.quizQuestion.helpers({
  // get the option object using the '_questionId' passed from the parent
  // this will serve as the question context for the template
  question: () => {
    const { _questionId } = Template.instance().data;
    const question = Questions.findOne(_questionId);
    // console.log({ question });

    return question;
  },
});
