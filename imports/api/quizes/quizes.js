//Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Quizes = new Mongo.Collection('quizes');

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const { _id } = Factory.create('question');
    questions.push(_id);
  }
  return questions;
}

Factory.define('quiz', Quizes, {
  header: () => 'test quiz header',
  questions: getQuestions,
});
