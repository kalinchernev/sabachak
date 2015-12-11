Meteor.subscribe('userData');

Template.registerHelper('profileImage', function(){
  var user =  Meteor.user();
  if (user.services.facebook !== undefined){
    return 'http://graph.facebook.com/' + user.services.facebook.id + '/picture/?type=large';
  } else {
    return 'img/default_profile.png';
  }
});