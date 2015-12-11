/**
 * server -> methods => CRUD
 */
Meteor.publish('Responses', function(){
  return Responses.find();
});

Meteor.startup(function(){
  return Meteor.methods({
    clearResponses: function(){
      return Responses.remove({});
    },
    createResponse: function(response){
      if(!Meteor.userId()){
        throw Meteor.Error('Access denied. Log in to do that.');
      }
      Responses.insert({
        question: response.question,
        reply: response.reply,
        feedback: response.feedback,
        date: response.date,
        questionId: response.questionId,
        userId: response.userId
      });
    }
  });
});
