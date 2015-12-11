Meteor.startup(function(){
  return Meteor.methods({
    clearPoints: function(){
      return Points.remove({});
    }
  });
});
