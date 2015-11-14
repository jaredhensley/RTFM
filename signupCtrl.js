angular.module('rtfmApp').controller('signupCtrl', function ($scope, userService, $state) {

  $scope.register = function (user) {
    console.log('inside register');
    userService.register(user).then(function (data) {
      console.log('inside .then');
      console.log(data);

      if (data) {
        $state.go('threads');
      }


    }).catch(function (err) {
      console.log(err);
      console.log('errrr');

    });
  };
})