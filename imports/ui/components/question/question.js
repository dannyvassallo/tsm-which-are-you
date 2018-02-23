import { Template } from 'meteor/templating';
import { Questions } from '../../../api/questions/questions.js';

import './question.html';
import '../questionOptions/questionOptions.js';
import '../questionHeader/questionHeader.js';

Template.question.onCreated(function questionOnCreated() {
  console.log(this.data._id);
});

Template.question.helpers({
  header: () => {
    const template = Template.instance();
    console.log(template.data._id);
    const question = Questions.findOne(template.data._id);
    console.log(question);
    return (question && question.header) || '';
  },
  options: () => {
    const template = Template.instance();
    const question = Questions.findOne(template.data._id);

    return (question && question.options) || '';
  },
});
