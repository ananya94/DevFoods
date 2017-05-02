var app = angular.module("myapp", ['ngRoute']);
var addr;
var api;
var restaurants;
app.controller("mycontroller", function ($scope) {
    $scope.enter = function ($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            getlocation();
        }
    }
});
var getlocation = function($http,$scope){
    addr = document.getElementById('address').value;
            console.log("hey");
            api = "https://developers.zomato.com/api/v2.1/locations?query="+addr+"&apikey=234ee45c527e2306d02951fd1cf82a89";
            console.log(api);
            $http.get(api).then(function(response){
                $scope.location1= response.data.location_suggestions[0].entity_id;
                console.log($scope.location1);
            })
}
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "/main.html"
    }).when("/chicago", {
        templateUrl: "templates/chicago.html",
        controller: "chicago"
    }).when("/LosAngeles", {
        templateUrl: "templates/LosAngeles.html",
        controller: "LosAngeles"
    }).when("/newyork", {
        templateUrl: "templates/newyork.html",
        controller: "newyork"
    });
}]);
app.controller("newyork", function ($http,$scope){
 $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response){
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);
     
    });
});
app.controller("chicago", function ($http,$scope){
 $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response){
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);
     
    });
});
app.controller("LosAngeles", function ($http,$scope){
 $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=281&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response){
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);
     
    });
});


//  $.getJSON("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=50", function(data){
//          restaurants= data;
//    });
//});

app.directive("mainText", function () {
    return {
        restrict: 'A',
        templateUrl: "/main.html"
    }
});
app.directive("modalText", function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/modal.html'
    }
});