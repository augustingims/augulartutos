var app = angular.module('MyApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',
        {
            url: '/home',
            templateUrl:'pages/home.html'
        })
        .state('directives',
        {
            url: '/directives',
            templateUrl:'pages/directive.html'
        });
});
