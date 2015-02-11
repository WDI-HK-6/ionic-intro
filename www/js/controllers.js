// Include Firebase
angular.module('starter.controllers', ['firebase', 'ngCordova'])

.controller('DashCtrl', function($scope, $ionicPlatform, $cordovaGeolocation, $interval) {
  console.log("Testing Geolocation");

  $ionicPlatform.ready(function() {
    $interval(function(){
      getLocation();
    }, 2000);
  });

  function getLocation() {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        console.log("logging");
        $scope.lat  = position.coords.latitude;
        $scope.long = position.coords.longitude;
        console.log($scope.lat, $scope.long);
      }, function(err) {
        // error
        console.log("error")
      });
  }
})

// Include $firebase
.controller('ChatsCtrl', function($scope, $firebase) {
  // $scope.chats = ["hihi", "hello world"]
  
  // Initial Firebase object
  // Use your own firebase name, not 'burning-fire-4355'
  var myDataRef = new Firebase('https://burning-fire-4355.firebaseio.com/');

  // Define the 'parent key'
  var usersRef = myDataRef.child("clement");

  // Write the 'value' belonging to the 'key' to Firebase
  // Save -> Type something into the input filed -> Press 'Submit' -> Check Firebase => Profit!
  $scope.submitMessage = function(message){
    usersRef.push(message);
    $scope.currentMessage = '';
  }

  // // create an AngularFire reference to the data
  var sync = $firebase(usersRef);
  // // download the data into a local object
  $scope.chats = sync.$asObject();

  // console.log($scope.chats);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('CountriesCtrl', function($scope, $http) {
  // $scope.countries = ['china', 'us'];

  $http.get('http://restcountries.eu/rest/v1/all').success(function(response){
    $scope.countries = response
  });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
