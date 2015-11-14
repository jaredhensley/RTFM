angular.module('rtfmApp').service('userService', function ($firebaseAuth, $state) {

  var ref = new Firebase('https://rtfm-jared.firebaseio.com/users');
  var authObj = $firebaseAuth(ref);

  //user initiated
  //$authWithPassword (logging in)

  this.getUser = function (user) {
    return authObj.$getAuth(user);
  }

  this.register = function (user) {
    return authObj.$createUser(user);

  }

  this.logout = function () {
    authObj.$unauth();
    /*$state.go('login');*/
  }

  this.login = function (user) {
      return authObj.$authWithPassword(user);
    }
    //"browser initiated (when app is loaded)
    //$getAuth() (is the user currently logged in?)

  //firebase initiated
  //$onAuth() (listen for when auth state changes)

  authObj.$onAuth(function (authData) {
    if (authData) {
      console.log('authdata', authData);
      console.log("authenticated");
      $state.go('threads');
    } else {
      console.log("not authenticated");
      if ($state) {
        $state.go('login');
      }
    }
  });
});