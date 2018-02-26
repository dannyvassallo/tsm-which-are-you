import { Template } from 'meteor/templating';
import { Options } from '../../../api/options/options';

import './questionOption.html';

Template.questionOption.helpers({
  text: () => {
    const { _id } = Template.instance().data;
    const option = Options.findOne(_id);

    return option ? option.text : '';
  },
});

Template.questionOption.events({
  // handle whenever a question option is clicked
  'click li': (event, template) => {
    const { _id } = template.data;
    console.log('clicked', _id);


    // animate click
    // NOTE: define a class in the css file that can be added and removed when
    // clicked. Bootstrap may be able to handle this out of the box.

    // END


    // store _id of selection so that we can calculate the best match after all
    // questions are answered
    // NOTE: this is a good use case for a session variable

    // END


    // scroll to next question
    // NOTE: the next question is the next <ul> tag

    // END
  },
});
