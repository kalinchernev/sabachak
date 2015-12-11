Points = new Mongo.Collection("points");

var Schemas = {};

// Point.
Schemas.Point = new SimpleSchema({
  questionId: {
    type: String,
    label: 'Question ID'
  },
  userId: {
    type: String,
    label: 'User ID'
  },
  date: {
    type: Date,
    label: 'Date',
    defaultValue: new Date(),
    optional: true
  },
  points: {
    type: Number,
    label: 'Points',
    defaultValue: 1,
    min: 1
  }
});

Points.attachSchema(Schemas.Point);