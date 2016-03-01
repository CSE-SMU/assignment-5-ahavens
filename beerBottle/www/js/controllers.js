angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

 
})


//injection of data
.factory('BeerData', function(){
  return {data: {}};
})

.controller('SearchCtrl', function($scope, $state, $http, BeerData) {     // use dependency injection to get the BeerData factory
  $scope.form = {};                                                       // used to store your form data

  $scope.search = function() {                                            // called when the search button is clicked
    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers',               // the link to my proxy
      params: {                                                           // sets the GET params
        name: $scope.form.name,
        glasswareId: $scope.form.glasswareId,
        isOrganic: $scope.form.isOrganic,
        hasLabels: $scope.form.hasLabels,
        year: $scope.form.year
    }
    }).then(function successCallback(response) {
      BeerData.data = response.data;                                      // save the response data in the factory
      $state.go('app.beers');                                             // go to the beer results state
    });
  }
})


.controller('BeersCtrl', function($scope, BeerData) {
  console.log(BeerData.data);
  //update playlist
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('BeerCtrl', function($scope, $stateParams, BeerData) {
  console.log($stateParams.id);
});
