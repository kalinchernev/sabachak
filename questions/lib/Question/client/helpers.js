Meteor.subscribe('Questions');

Template.registerHelper('questionStatus', function(questionId){
  // get only the LAST response
  var response = Responses.findOne({questionId: questionId}, { sort: { date: -1 }, limit: 1 });

  if (response !== undefined){
    if (response.feedback == 'true'){
      return 'correct';
    } else if (response.feedback == 'false'){
      return 'wrong';
    }
  } else {
    return 'pending';
  }
});

Template.registerHelper('questionClass', function(questionId){
  // get only the LAST response
  var response = Responses.findOne({questionId: questionId}, { sort: { date: -1 }, limit: 1 });

  if (response !== undefined){
    if (response.feedback == 'true'){
      return 'success';
    } else if (response.feedback == 'false'){
      return 'warning';
    }
  } else {
    return 'default';
  }
});


Template.registerHelper('questionConrolsHide', function(questionId){
  // get only the LAST response
  var response = Responses.findOne({questionId: questionId}, { sort: { date: -1 }, limit: 1 });

  if (response !== undefined){
    if (response.feedback == 'true'){
      return 'hidden';
    } else if (response.feedback == 'false'){
      return 'show';
    }
  }
});

Template.registerHelper('questionDisabled', function(questionId){
  // get only the LAST response
  var response = Responses.findOne({questionId: questionId}, { sort: { date: -1 }, limit: 1 });

  if (response !== undefined){
    if (response.feedback == 'true'){
      return 'disabled';
    }
  }
});

Template.registerHelper('questionCorrectValue', function(questionId){
  // get only the LAST response
  var response = Responses.findOne({questionId: questionId}, { sort: { date: -1 }, limit: 1 });

  if (response !== undefined){
    if (response.feedback == 'true'){
      return 'Right value: ' + response.reply;
    }
  }
});

Template.registerHelper('questionsAll', function(){
  // All the questions.
  return Questions.find().fetch().map(function(question, index){
    question.index = index;
    return question;
  });
});
