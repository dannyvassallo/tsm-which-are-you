import { Template } from 'meteor/templating';
import { Options } from '../../../api/options/options';

import './questionOption.html';

Template.questionOption.helpers({
  // get the option object using the '_optionId' passed from the parent
  // this will serve as the option context for the template
  option: () => {
    const { _optionId } = Template.instance().data;
    const option = Options.findOne(_optionId);

    return option;
  },
});

Template.questionOption.events({
  // handle whenever a question option is clicked
  'click li': (event, template) => {
    const { _optionId } = template.data;
    console.log('clicked', { _optionId });

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
