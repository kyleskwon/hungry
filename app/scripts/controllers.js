//angular.module('hungry.controllers', []).
//controller('masterController', function($scope) {
//    $scope.driversList = [
//      {
//          Driver: {
//              givenName: 'Sebastian',
//              familyName: 'Vettel'
//          },
//          points: 322,
//          nationality: "German",
//          Constructors: [
//              {name: "Red Bull"}
//          ]
//      },
//      {
//          Driver: {
//          givenName: 'Fernando',
//              familyName: 'Alonso'
//          },
//          points: 207,
//          nationality: "Spanish",
//          Constructors: [
//              {name: "Ferrari"}
//          ]
//      }
//    ];
//});

angular.module('hungry.controllers', []).
//  controller('masterController', function($scope, hungryAPIservice) {
//    $scope.nameFilter = null;
//    $scope.driversList = [];
//
//    hungryAPIservice.getDrivers().success(function (response) {
//        //Dig into the responde to get the relevant data
//        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
//    });
//  });

controller("masterController", function($scope, $http) {
    $scope.mealList = [];
    
    $http.get("https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961")
      .then(function(response) {
          $scope.meal = response.data;
            $scope.mealList.add($scope.meal);
      });
    console.log($scope.mealList);
});