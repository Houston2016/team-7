'use strict';

/**
 * @ngdoc function
 * @name cfgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cfgApp
 */
angular.module('cfgApp')
  .controller('MainCtrl', [ '$scope' ,function($scope){
    $scope.userSignIn=[
      {username:$scope.signIn.username},
      {password:$scope.signIn.password}
    ];
  }]);
