import FB from 'fb';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { Options } from '../../../api/options/options';

import './questionOption.html';

Template.questionOption.onCreated(function questionOptionOnCreated() {
  // get the option object using the '_optionId' passed from the parent
  // this will serve as the option context for the template
  const { _optionId } = this.data;
  const option = Options.findOne(_optionId);
  this.option = new ReactiveVar(option);
});


Template.questionOption.helpers({
  option: () => Template.instance().option.get(),
});

Template.questionOption.events({
  // handle whenever a question option is clicked
  'click a': (event, template) => {
    const { _matchId } = template.option.get();

    // store `_id` of selection so that we can calculate the best match after
    // all questions are answered
    const matches = Session.get('matches') || [];
    Session.set('matches', [...matches, _matchId]);
    // END


    // use jQuery to scroll to next `quiz-question` class
    const $target = $(event.target);
    const $thisQuizQuestion = $target.parents('.scrollTop-container');
    const $nextQuizQuestion = $thisQuizQuestion.next('.scrollTop-container');

    $target.addClass('selected active');
    $thisQuizQuestion.addClass('answered-question');

    if ($nextQuizQuestion.length) {
      const scrollTop = $thisQuizQuestion.offset().top;
      setTimeout(function () {
        $('html,body').animate({ scrollTop }, 'slow');
      }, 100);
    } else {
      Session.set('isQuizComplete', true);
    }
    // END
  },
});
