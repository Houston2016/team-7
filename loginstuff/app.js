/**
 * Created by Echo on 20/02/2016.
 */
var sampleApp = angular.module('nav', ['ngRoute', 'ngAnimate' ]);
sampleApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{
                templateUrl:'index.html',
                controller: 'indexController'
            })
        .when('/Register',
            {
                templateUrl:'Register.html',
                controller: 'RegisterController'
            })
        .otherwise({
            redirectTo:'/index'
        });
}]);
sampleApp.controller('indexController',function($scope){
    $scope.pageClass='index';
});
sampleApp.controller('RegisterController', function($scope){
    $scope.pageClass='Register';
})