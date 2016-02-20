/**
 * Created by Echo on 20/02/2016.
 */
var app =angular.module('cfgApp', [
        'ngRoute'

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'htmlFiles/Home.html',
                controller: 'HomeCtrl',
                controllerAs: 'Home'
            })
            .when('/Register', {
                templateUrl: 'htmlFiles/Register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'Register'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.controller('HomeCtrl', function ($scope) {
    this.awesomeThings = [
        'AngularJS'
    ];
});

app.controller('RegisterCtrl', function ($scope) {
    this.awesomeThings = [
        'AngularJS'
    ];
});