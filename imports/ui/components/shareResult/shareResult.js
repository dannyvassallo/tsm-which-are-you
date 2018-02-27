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
    const matches = Session.get('matches');
    // END


    // transform the answer array so that it is just an array of matches

    // END


    // find the most common match from an array of matches
    function mode(array) {
      if(array.length == 0) {
          return null;
        }
      let modeMap = {};
      let maxEl = array[0];
      let maxCount = 1;
      for(let i = 0; i < array.length; i++) {
          let el = array[i];
          if(modeMap[el] == null) {
              modeMap[el] = 1;
          } else {
              modeMap[el]++;
          }
          if(modeMap[el] > maxCount) {
              maxEl = el;
              maxCount = modeMap[el];
          }
      }
      return maxEl;
  }
    const match = mode(matches);
    console.log(matches);
    // END


    // return the most common match object from the database
    return match;
    // END
  },
});
