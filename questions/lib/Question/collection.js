// Question.

Questions = new Mongo.Collection("questions");

var Schemas = {};

Schemas.Question = new SimpleSchema({
  question: {
    type: String,
    label: 'Question',
    max: 1000
  },
  answer: {
    type: String,
    label: 'Answer',
    max: 1000
  },
  date: {
    type: Date,
    label: 'Date',
    defaultValue: new Date(),
    optional: true
  },
  userId: {
    type: String,
    defaultValue: this.userId,
    optional: true,
    label: 'User / Author'
  }
});

Questions.attachSchema(Schemas.Question);