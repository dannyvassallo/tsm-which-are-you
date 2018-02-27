
import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Options = new Mongo.Collection('options');
export default Options;

Factory.define('option', Options, {
  text: () => faker.lorem.sentence(),
  match: () => Factory.create('match'),
});
