var static1 = angular.module("static",[]);
static1.controller("newyork", function ($http, $scope) {
    $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response) {
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);

    });
});
static1.controller("chicago", function ($http, $scope, $routeParams) {
    var city_id= $routeParams.city_id;
    $http.get("https://developers.zomato.com/api/v2.1/search?entity_id="+city_id+"&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response) {
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);

    });
});
static1.controller("LosAngeles", function ($http, $scope) {
    $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response) {
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);

    });
});


//  $.getJSON("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=50", function(data){
//          restaurants= data;
//    });
//});

static1.directive("mainText", function () {
    return {
        restrict: 'A',
        templateUrl: "/main.html"
    }
});
static1.directive("modalText", function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/modal.html'
    }
});
static1.controller("searchRes", function ($http,$scope) {
    $scope.enter = function ($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            getlocation($http,$scope);
        }
    }
});
var getlocation = function($http,$scope){
    addr = document.getElementById('address').value;
            console.log("hey");
            //console.log(api);
            $http.get("https://developers.zomato.com/api/v2.1/cities?q="+addr+"&count=50&apikey=234ee45c527e2306d02951fd1cf82a89").then(function(response){
            $scope.location1= response.data.location_suggestions;
                console.log($scope.location1);
            });
};