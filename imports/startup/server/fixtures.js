import { Meteor } from 'meteor/meteor';
import { Answers } from '../../api/answers/answers.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Answers.find().count() === 0) {
    const data = [
      {
        text: 'Do the Tutorial',
      },
      {
        text: 'Follow the Guide',
      },
      {
        text: 'Read the Docs',
      },
      {
        text: 'Discussions',
      },
    ];

    data.forEach(answer => Answers.insert(answer));
  }
});
