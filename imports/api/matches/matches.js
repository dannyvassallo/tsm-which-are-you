// Define matches from database collection

import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Matches = new Mongo.Collection('matches');
export default Matches;

Factory.define('match', Matches, {
  title: () => faker.lorem.sentences(),
  body: () => faker.lorem.sentences(),
  img: () => 'https://www.placecage.com/c/200/200',
});
