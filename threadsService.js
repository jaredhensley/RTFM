angular.module('rtfmApp').service('threadsService', function (fb) {
  console.log(fb);

  this.getThreads = function () {
    return new Firebase(fb.url + '/threads');

  }

  this.getThread = function (threadId) {
    var test = new Firebase(fb.url + '/threads/' + threadId)
    console.log(test);
    return test;
  }

  this.getComments = function (threadId) {
    return new Firebase(fb.url + '/threads/' + threadId + '/comments');
  }

});