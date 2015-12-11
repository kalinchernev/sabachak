// Answer.
Responses = new Mongo.Collection("responses");

var Schemas = {};

Schemas.Response = new SimpleSchema({
  question: {
    type: String,
    label: 'Question'
  },
  reply: {
    type: String,
    label: 'What' // What was the answer of the user?
  },
  feedback: {
    type: String,
    label: 'Status' // What was the feedback after the answer?
  },
  date: {
    type: Date,
    label: 'Date',
    defaultValue: new Date(),
    optional: true
  },
  questionId: {
    type: String,
    label: 'Question ID'
  },
  userId: {
    type: String,
    label: 'User'
  }
});

Responses.attachSchema(Schemas.Response);