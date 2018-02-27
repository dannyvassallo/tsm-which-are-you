// Define quizes from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Quizes = new Mongo.Collection('quizes');
export default Quizes;

Factory.define('quiz', Quizes, {
  title: () => `Which ${faker.lorem.words().join(' ')} are you?`,
  description: () => faker.lorem.sentences(),
  questions: () => {
    const questions = [];
    for (let i = 0; i < 10; i += 1) {
      const { _id } = Factory.create('question');
      questions.push(_id);
    }

    return questions;
  },
});
