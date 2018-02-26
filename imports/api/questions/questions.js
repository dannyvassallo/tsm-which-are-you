//Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Questions = new Mongo.Collection('questions');

Factory.define('question', Questions, {
  header: () => 'test question header',
  options: () => {
    const options = [];
    for (let i = 0; i < 4; i++) options.push(Factory.create('option')._id);

    return options;
  },
});
