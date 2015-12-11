Template.navbar.helpers({
  username: function(){
    return Meteor.user().username;
  }
});

Template.navbar.events({
  'click .login-facebook': function(event, template){
    event.preventDefault();
    Meteor.loginWithFacebook({}, function(err){
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
    });
  }
});