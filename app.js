angular.module('rtfmApp', ['ui.router', 'firebase'])

//think of fb as a service we can inject anywhere
.constant('fb', {
  url: 'https://rtfm-jared.firebaseio.com/'
})

.config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('threads', {
      url: '/threads',
      controller: 'threadsCtrl',
      templateUrl: '/threads.html',
      resolve: {
        threadsRef: function (threadsService) {

          var test = threadsService.getThreads();
          console.log(test);
          return test;
        }
      }


    })
    .state('login', {
      url: '/login',
      controller: 'loginCtrl',
      templateUrl: 'login.html'
    })
    .state('signup', {
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: 'signup.html'

    })
    .state('logout', {
      url: '/logout',
      controller: function (userService) {
        userService.logout();
      }

    })
    .state('thread', {
      url: '/threads/:threadId',
      templateUrl: '/thread.html',
      controller: 'threadCtrl',
      resolve: {
        threadRef: function (threadsService, $stateParams) {
          console.log($stateParams.threadId);
          return threadsService.getThread($stateParams.threadId);
        },
        commentsRef: function (threadsService, $stateParams) {
          return threadsService.getComments($stateParams.threadId);
        }
      }
    });

});