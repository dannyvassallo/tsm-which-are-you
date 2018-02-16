//Define answers from database collection

import { Mongo } from 'meteor/mongo';

export const Answers = new Mongo.Collection('answers');
