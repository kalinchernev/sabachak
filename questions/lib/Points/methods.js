Meteor.methods({
  addPoints: function(points){
    if(!Meteor.userId()){
      throw Meteor.Error('Denied.');
    } else {
      Points.insert({
        questionId: points.questionId,
        userId: points.userId,
        date: points.date,
        points: points.points
      });
    }
  }
});