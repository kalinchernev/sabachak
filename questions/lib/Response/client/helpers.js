/**
 * client -> helpers => Templates
 */
Meteor.subscribe('Responses');

Template.registerHelper('responsesAll', function(){
  // All the responses.
  return Responses.find().fetch().map(function(response, index){
    response.index = index;
    return response;
  });
});
