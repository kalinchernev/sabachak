Template.registerHelper('userProgress', function(){
  var questionsCount = Questions.find().fetch().length;

  var userId = Meteor.userId();
  var userCorrectAnswers = Responses.find({userId: userId}).fetch().length;

  return Math.round((userCorrectAnswers/questionsCount) * 100);

});