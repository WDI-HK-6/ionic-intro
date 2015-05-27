# Introducing Ionic
### Building a mobile app with web technologies

1. Install node.js
  - Download and install from http://nodejs.org/

2. Install Ionic and Cordova
  - Inside terminal: `npm install -g cordova ionic ios-sim`
  - npm stands for node package manager. It manages libraries for node.js
  - Cordova is another library that will eventually turn a HTML5 website into a hybrid mobile app
  - Ionic is a bunch of libraries, including Angular, that help you easily build a hybrid mobile app

3. Create an Ionic app
  - `ionic start myApp tabs`
  - or
  - `ionic start myApp blank`
  - or
  - `ionic start myApp sidemenu`
  - See differences here: http://ionicframework.com/getting-started/

4. Running the app
  - `cd myApp`
  - `ionic serve`

5. Ionic CSS and JS components
  - http://ionicframework.com/docs/components/
  - http://ionicframework.com/docs/api/

6. Firebase
  - Register for an account

7. Simulate iOS
  - `ionic platform add ios`
  - `ionic build ios`
  - `ionic emulate ios`
