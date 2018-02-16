import { Template } from 'meteor/templating';

import './questionCard.html';
import { Answers } from '../../../api/answers/answers.js';

Template.questionCard.helpers({
  answers() {
    return Answers.find().fetch();
  }
});
