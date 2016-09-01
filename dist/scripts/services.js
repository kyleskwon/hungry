angular.module('hungry.services', []).
  factory('hungryAPIservice', function($http) {

    var hungryAPI = {};

    hungryAPI.getMeals = function() {
      return $http({
        method: 'JSONP', 
        url: 'https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961'
      });
    }
    return hungryAPI;
  });