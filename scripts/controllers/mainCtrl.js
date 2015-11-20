'use strict';

angular.module('chattyApp').controller('mainCtrl', function ($scope, messageService) {

  function getMessages() {
    messageService.getMessages().then(function(res) {
      $scope.messages = res;
    });
  };

  $scope.sendMessage = function() {
    console.log('neato');
    if ($scope.newMessage && $scope.newMessage.message) {
      if (!$scope.newMessage.user) {
        $scope.newMessage.user = 'me';
      }

      messageService.sendMessage($scope.newMessage).then(function(res) {
        $scope.newMessage = '';
        getMessages();
      });
    }
  };

  getMessages();

});
