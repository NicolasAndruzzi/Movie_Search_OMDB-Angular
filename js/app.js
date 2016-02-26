var app = angular.module('movieApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/movies', {
      templateUrl: 'partials/listResults.html',
      controller: 'HomeSearchController'
    })
    .when('/movies/:id', {
      templateUrl: 'partials/showMovie.html',
      controller: 'ShowController'
    })
    // .otherwise('/');
});
