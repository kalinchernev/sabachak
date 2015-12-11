Template.preferences.events({
  'click .reset-score': function(event, template) {
    event.preventDefault();
    Meteor.call('clearResponses');
  }
});