Meteor.publish('userData', function(){
  return Meteor.users.find({_id: this.userId}, {fields: {'services': 1 }});
});

ServiceConfiguration.configurations.remove({
  service: 'facebook'
});

ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: '211796012484759',
  secret: '1bc15d35ab9aca4b03941b627f27174b'
});