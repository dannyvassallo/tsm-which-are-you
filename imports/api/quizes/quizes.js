//Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Quizes = new Mongo.Collection('quizes');

Factory.define('quiz', Quizes, {
  header: () => 'test quiz header',
  questions: () => {
    const questions = [];
    for (let i = 0; i < 10; i++) questions.push(Factory.create('question')._id);

    return questions;
  },
});
