import { Template } from 'meteor/templating';
import { Matches } from '../../../api/matches/matches';
import { Session } from 'meteor/session';

import './shareResult.scss';
import './shareResult.html';

const getMode = (array) => {
  const freqMap = {}; // store frequency for each item in the array

  let freq = 0; // frequency of the mode
  let mode;

  array.forEach((item) => {
    freqMap[item] = (freqMap[item] || 0) + 1; // increment the item count

    if (freq < freqMap[item]) {
      freq = freqMap[item];
      mode = item;
    }
  });

  return mode;
};


Template.shareResult.onCreated(function shareResultOnCreated() {
  this.show = new ReactiveVar(false);
  this.match = new ReactiveVar(false);


  Tracker.autorun(() => {
    const show = Session.get('isQuizComplete') || false;
    this.show.set(show);

    if (show) {
      // bring in the session variable that holds all the answers
      const matches = Session.get('matches');
      // END


      // find the most common match from an array of matches
      const _matchId = getMode(matches);
      const match = Matches.findOne(_matchId);
      // console.log({ _matchId, match });
      // END

      // return the most common match object from the database
      this.match.set(match);
      // return match;
      // END
    }
  });
});


Template.shareResult.helpers({
  // helper that will only be true after all questions are answered
  show: () => Template.instance().show.get(),
  match: () => Template.instance().match.get(),
});
