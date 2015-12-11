Meteor.publish('Questions', function(){
  return Questions.find();
});

Meteor.methods({
  clearQuestions: function(){
    return Questions.remove({});
  },
  createQuestion: function(question){
    Questions.insert({
      question: question.question,
      answer: question.answer,
      userId: Meteor.userId()
    });
  },
  deleteQuestion: function(questionId){
    Questions.remove(questionId);
  }
});


