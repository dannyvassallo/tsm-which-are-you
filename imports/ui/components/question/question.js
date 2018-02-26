import { Template } from 'meteor/templating';
import { Questions } from '../../../api/questions/questions.js';

import './question.html';
import '../questionOptions/questionOptions.js';
import '../questionHeader/questionHeader.js';

// Template.question.onCreated(() => {});

Template.question.helpers({
  header: () => {
    const { _id } = Template.instance().data;
    const question = Questions.findOne(_id);

    return question ? question.header : '';
  },
  options: () => {
    const { _id } = Template.instance().data;
    const question = Questions.findOne(_id);

    return question ? question.options : [];
  },
});
