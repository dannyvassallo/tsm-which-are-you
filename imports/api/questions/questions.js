// Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Questions = new Mongo.Collection('questions');
export default Questions;

Factory.define('question', Questions, {
  title: () => faker.lorem.sentence(),
  subtitle: () => faker.lorem.words().join(' '),
  description: () => faker.lorem.sentences(),
  options: () => {
    const options = [];
    for (let i = 0; i < 4; i += 1) {
      const { _id } = Factory.create('option');
      options.push(_id);
    }

    return options;
  },
});
