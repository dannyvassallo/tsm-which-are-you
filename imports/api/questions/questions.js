//Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Questions = new Mongo.Collection('questions');

const getOptions = () => {
  const options = [];
  for (let i = 0; i < 4; i++) {
    const { _id } = Factory.create('option');
    options.push(_id);
  }
  return options;
}

Factory.define('question', Questions, {
  header: () => 'test question header',
  options: getOptions,
});
