//(function() {
//    function Meals($http) {
//        var Meals = {};
//        
//        $http.get("https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961")
//          .then(function(response) {
//              this.Meals = response.data;
//          });
//        
//        Meals.getCollection = function(numberOfMeals) {
//            this.meals = [];
//            for (var i = 0; i < numberOfMeals; i++) {
//                this.meals.push();
//            }
//            return this.meals;
//        };
//        
//        return Meals;
//    }
//    
//    angular
//        .module('hungry')
//        .factory('Meals', Meals);
//})();