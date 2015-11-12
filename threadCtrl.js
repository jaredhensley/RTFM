angular.module('rtfmApp').controller('threadCtrl', function ($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject) {

  console.log(threadRef);
  $scope.comments = $firebaseArray(commentsRef);

  var thread = $firebaseObject(threadRef);

  thread.$bindTo($scope, 'thread');

  $scope.createComment = function (username, text) {
    $scope.comments.$add({
      username: username,
      text: text
    })
  }
});