Meteor.subscribe('Questions');

var recorder = {
  start: function(questionId){
    $feedbackArea = $('*[data-question-id="' + questionId + '"]').find('.listener__feedback');

    // Test browser support
    var SpeechRecognition = window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition ||
      window.oSpeechRecognition;

    recorder.recognizer = new SpeechRecognition();

    // Recogniser doesn't stop listening even if the user pauses
    recorder.recognizer.continuous = true;

    // On result
    recorder.recognizer.onresult = function(event){
      $feedbackArea.val('');
      for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          $feedbackArea.val(event.results[i][0].transcript);
        }
      }
    };
    // On errors
    recorder.recognizer.onerror = function(event) {
      if (event.error === 'not-allowed') {
        sweetAlert('Sorry!', 'I am not allowed to listen to you.', 'error');
      }
    };
    recorder.recognizer.start();
  },
  stop: function(){
    if (recorder.recognizer !== undefined) {
      recorder.recognizer.stop();
    }
  }
};

Template.Voice.events({
  "click .listener__listen": function(event, template){
    var questionId = this.questionId;
    recorder.start(questionId);
    // listen for speech and provide feedback via input control change.
    // fill in the input control based on the id.
  },
  "click .listener__stop": function(event, template){
    var questionId = this.questionId;
    var $feedbackArea = $('*[data-question-id="' + questionId + '"]').find('.listener__feedback');

    recorder.stop();
    $feedbackArea.attr('disabled', 'disable');
  },
  "click .listener__check": function(event, template){
    // Question.
    var questionId    = this.questionId;
    var question      = Questions.findOne({_id: questionId});

    // Answer.
    var $feedbackArea  = $('*[data-question-id="' + questionId + '"]').find('.listener__feedback');
    var answerUser     = $feedbackArea.val();
    var answerExpected = question.answer;
    var answerStatus   = '';

    // Disable further answer at the moment.
    recorder.stop();
    $feedbackArea.attr('disabled', 'disable');

    // Check answer and give feedback.
    if (answerUser == answerExpected) {
      sweetAlert('Good job!', 'You said it right!', 'success');
      answerStatus = true;

      // Award a point to the user.
      Meteor.call('addPoints', {
        questionId: questionId,
        userId: Meteor.userId(),
        points: 1
      });


      /**
       * - award a point
       * - remove controls, show only the user's answer
       * - add success label to the question status
       */
    } else {
      sweetAlert('Nope!', 'No worries, try again!', 'error');
      answerStatus = false;
    }

    Meteor.call('createResponse', {
      question: answerExpected,
      reply: answerUser,
      feedback: answerStatus,
      date: new Date(),
      questionId: questionId,
      userId: Meteor.userId()
    });
  },
  "click .listener__retry": function(event, template){
    event.preventDefault();

    var questionId    = this.questionId;
    var $questionForm = $('*[data-question-id="' + questionId + '"]');

    $questionForm.find('.listener__feedback').removeAttr('disabled');
  }
});
