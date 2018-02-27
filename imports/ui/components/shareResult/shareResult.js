import { Template } from 'meteor/templating';

import './shareResult.html';

Template.shareResult.helpers({
  // helper that will only be true after all questions are answered
  show: () => {
    //
    const show = Session.get('isQuizComplete') || false;
    // END

    return show;
  },
  match: () => {
    // bring in the session variable that holds all the answers

    // END


    // transform the answer array so that it is just an array of matches

    // END


    // find the most common match from an array of matches
    const match = {};
    // END


    // return the most common match object from the database
    return match;
    // END
  },
});
