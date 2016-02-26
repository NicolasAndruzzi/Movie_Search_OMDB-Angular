app.controller('ShowController', function($scope, $routeParams, $http) {
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(data){
    $scope.movie = data.data;
  });
});
