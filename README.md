# sabachak
szabadság means freedom.

Say "szabadság", say [freedom](https://www.youtube.com/watch?v=5FFRoYhTJQQ)!

## History
Beer night with Hungarian friends. Saying "w" in English can be a funny game.
And a game can be a learning experience for practice speaking in a language.

## About
Several concepts are applied in a simple way:
- Voice recognition with Speech API
- Question is a request for correct answer from the User
- Response is a response from a User about a Question
- Points are awarded if a Response is correct based on an expectation

## Meteor project
Meteor came handy. Packages used:
```
aldeed:collection2
aldeed:autoform
twbs:bootstrap
houston:admin
iron:router
accounts-ui
accounts-password
accounts-facebook
fourseven:scss
kevohagan:sweetalert
service-configuration
```

## Start the project
- Clone the repo `git clone git@github.com:kalinchernev/sabachak.git`
- In terminal, go to questions folder `cd questions`
- Start the project on [http://localhost:3000](http://localhost:3000) by running `meteor` in the folder

## Insert questions
It's still a pain for people who like interfaces.
For now, you can run

 `Meteor.call('createQuestion', {question: 'hello world', answer: 'hello world'});`

 Can be run anywhere (Console, Client, Server) to start adding your questions with expected answer. The question should be visible on the home page.

## The interface
Can't be more simplistic I guess.

The front-end:

![Front-end of the app](https://raw.githubusercontent.com/kalinchernev/sabachak/master/questions/public/img/frotnend_interface.png "Front-end")

The back-end:

![Back-end of the app](https://raw.githubusercontent.com/kalinchernev/sabachak/master/questions/public/img/backend_interface.png "Front-end")
