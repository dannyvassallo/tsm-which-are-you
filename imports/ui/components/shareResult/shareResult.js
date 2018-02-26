import { Template } from 'meteor/templating';

import './shareResult.html';

Template.shareResult.helpers({
  // helper that will only be true after all questions are answered
  hide: () => {
    // bring in the session variable that holds all the answers

    // END


    // count all of the answers subbmited by the client and determine if the
    // results should be shown
    const hide = true;
    // END


    return hide;
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
