import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

import { Quizes } from '../../api/quizes/quizes.js';


const seedMatches = ({ count = 4 }) => {
  const matches = [];
  for (let i = 0; i < count; i += 1) {
    const { _id } = Factory.create('match');
    matches.push(_id);
  }

  return matches;
};

const seedOptions = ({ matches = [] }) => {
  const options = [];

  for (let i = 0; i < matches.length; i += 1) {
    const _matchId = matches[i];
    const { _id } = Factory.create('option', { _matchId });
    options.push(_id);
  }

  return options;
};

const seedQuestion = ({ matches }) => {
  const options = seedOptions({ matches });
  const question = Factory.create('question', { options });

  return question;
};

const seedQuestions = ({ count = 10 }) => {
  const matches = seedMatches({ count: 4 });

  const questions = [];
  for (let i = 0; i < count; i += 1) {
    const { _id } = seedQuestion({ matches });
    questions.push(_id);
  }

  return questions;
};

const seedQuiz = () => {
  const questions = seedQuestions({ count: 10 });

  Factory.create('quiz', { questions });
};


const seedQuizes = ({ count = 1 }) => {
  // seed Quizes collection if it is empty
  const seedCount = count - Quizes.find().count();
  if (seedCount > 0) seedQuiz({ count: seedCount });
};


Meteor.startup(() => {
  seedQuizes({ count: 1 });
});
