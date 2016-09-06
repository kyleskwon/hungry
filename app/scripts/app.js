var app = angular.module('hungry', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    
    $urlRouterProvider.otherwise('/master');
    
    $stateProvider
        .state('master', {
            url: '/master',
            controller: 'MasterCtrl',
            templateUrl: '/templates/master.html'
        })
        .state('detail', {
            url: '/detail',
            controller: 'DetailCtrl',
            templateUrl: '/templates/detail.html'
        });
}]);

app.controller("MasterCtrl", function($scope, $http) {
    $http.get("https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961")
      .then(function(response) {
          $scope.meal = response.data;
      });
});

app.controller("DetailCtrl", function($scope, $http) {
    $http.get("https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961")
      .then(function(response) {
          $scope.meal = response.data;
      });
});
