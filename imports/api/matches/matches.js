// Define matches from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';

export const Matches = new Mongo.Collection('matches');

Factory.define('match', Matches, {
  text: () => 'test match',
  img: () => 'https://www.placecage.com/c/200/200',
});
