app.controller('ShowController', function($scope, $routeParams, $http) {
  // console.log($routeParams.id);

  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id).then(function(data){
    $scope.singleMovie = data.data;

    console.log(data.data);
    // console.log($scope.apiReturn);
    // console.log("**********************");
    // console.log($scope.searchBox);
    // console.log("**********************");
  });
  // $scope.whereAmI = "I am SHOW Controller"
})
