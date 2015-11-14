angular.module('rtfmApp').controller('loginCtrl', function ($scope, userService, $state) {


  $scope.login = function (user) {

    return userService.login(user).then(function (res) {
      console.log(res);
      $state.go('threads');
    }, function (err) {
      console.log('err');
    });

  };


});