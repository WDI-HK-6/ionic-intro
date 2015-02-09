angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $firebase) {

  console.log('testing');

  var myDataRef = new Firebase('https://burning-fire-4355.firebaseio.com/');

  var usersRef = myDataRef.child("messages");

  $scope.submitMessage = function(message){
    usersRef.push(message);
  }

  // myDataRef.on('child_added', function(snapshot) {
  //   $scope.chats = snapshot.val();
  //   console.log(snapshot.val());
  // });

  // create an AngularFire reference to the data
  var sync = $firebase(usersRef);
  // download the data into a local object
  $scope.chats = sync.$asObject();

  console.log($scope.chats);

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
