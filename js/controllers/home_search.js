app.controller('HomeSearchController', function ($scope, $http) {
  if ($scope.searchBox == undefined) {
    $scope.searchBox = ""
  }
    $http.get('http://www.omdbapi.com/?s=' + $scope.searchBox).then(function(data){
      $scope.apiReturn = data.data.Search;
      // console.log("HomeSearchController");
      // console.log($scope.apiReturn[0].imdbID)
      // console.log("**************");
    });
});
