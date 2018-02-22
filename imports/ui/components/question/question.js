import { Template } from 'meteor/templating';

import './question.html';
import '../questionOptions/questionOptions.js';
import '../questionHeader/questionHeader.js';

Template.question.helpers({
  header: () => {
    const header = "questionHeader";
    return header;
  },
  options: () => {
    const options = [{
      text: "option1",
    }, {
      text: "option2",
    }, {
      text: "option3",
    }, {
      text: "option4",
    }];
    return options;
  },
});
