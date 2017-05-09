var app = angular.module('myapp', ['ngRoute', 'static']);
var addr;
var api;
var hotel, location2;
app.controller("mycontroller", ['$routeParams','$http', '$scope', function ($routeParams, $http, $scope) {
//        $scope.enter = function ($event) {
//            var keyCode = $event.which || $event.keyCode;
//            if (keyCode === 13) {
                var addr = $routeParams.city_id;
//                $http.get( "https://developers.zomato.com/api/v2.1/locations?query=" + addr + "&apikey=234ee45c527e2306d02951fd1cf82a89").then(function (response) {
//                    $scope.location1 = response.data.location_suggestions[0].entity_id;
//                    console.log($scope.location1);
//                    console.log("hi");
                    var newapi = "https://developers.zomato.com/api/v2.1/search?entity_id=" + addr + "&entity_type=city&apikey=234ee45c527e2306d02951fd1cf82a89&count=40&sort=rating&order=desc";
                    console.log(newapi);
                    $http.get(newapi).then(function (responce) {
                        $scope.hotel = responce.data.restaurants;
                        console.log($scope.hotel);
                    })
                }]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
            templateUrl: "/main.html"
        }).when("/LosAngeles", {
            templateUrl: "templates/LosAngeles.html",
            controller: "LosAngeles"
        }).when("/newyork", {
            templateUrl: "templates/newyork.html",
            controller: "newyork"
        }).when("/city/:city_id", {
            templateUrl: "templates/city.html",
            controller: "mycontroller"
        }).when("/chicago/:city_id/:city_name",{
        templateUrl:"templates/chicago.html",
        controller: "chicago"
    });
}
]);
