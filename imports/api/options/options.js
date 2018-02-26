//Define answers from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Options = new Mongo.Collection('options');

Factory.define('option', Options, {
  text: () => 'test text',
  match: () => Factory.create('match'),
});
