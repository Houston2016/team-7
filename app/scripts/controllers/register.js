'use strict';

/**
 * @ngdoc function
 * @name cfgApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the cfgApp
 */
angular.module('cfgApp')
  .controller('RegisterCtrl', ['$scope', '$location', function ($scope, $location) {
    this.changeView = function(view){
      console.log("Reg Clicked");
        $location.path(view); // path not hash
    };

  }]);
