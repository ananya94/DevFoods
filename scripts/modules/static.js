//getting 15 restaurants with the highest rating
var static1 = angular.module("static",[]);
static1.controller("newyork", function ($http, $scope) {
    $http.get("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&sort=rating&order=desc&apikey=234ee45c527e2306d02951fd1cf82a89&count=15").then(function (response) {
        $scope.restaurants = response.data.restaurants;
        console.log($scope.restaurants);

    });
});

//directive for main.html
static1.directive("mainText", function () {
    return {
        restrict: 'A',
        templateUrl: "/main.html"
    }
});

//directive for login modal
static1.directive("modalText", function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/modal.html'
    }
});

//controller for triggering the search options
static1.controller("searchRes", function ($http,$scope) {
    $scope.enter = function ($event) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            getlocation($http,$scope);
        }
    }
     $("body").addClass("container1")
});

//function called for getting the location api for the location options
var getlocation = function($http,$scope){
    addr = document.getElementById('address').value;
            $http.get("https://developers.zomato.com/api/v2.1/cities?q="+addr+"&count=50&apikey=234ee45c527e2306d02951fd1cf82a89").then(function(response){
            $scope.location1= response.data.location_suggestions;
            });
};

//directive for navigation bar
static1.directive("navBar", function(){
    return{
        restrict: 'E',
        templateUrl: '/templates/navbar.html'
    }
});