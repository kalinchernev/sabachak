Router.configure({
  layoutTemplate:"layout"
});

Router.map(function(){
  // About route.
  this.route('about');
  // Responses route.
  this.route('responses');
  // Questions route.
  this.route('questions', {
    path: '/',
    template: 'questions'
  });
  this.route('logout', {
    path: '/log-out',
    onRun: function(){
      if (Meteor.user()) {
        Meteor.logout();
        Router.go('/');
      }
      else {
        Router.go('/admin/login');
      }
    }
  });
});
