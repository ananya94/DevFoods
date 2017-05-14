var app = angular.module('myapp', ['ngRoute', 'static']);
var addr;
var api, map;
var markers = [];
app.controller("mycontroller", ['$routeParams', '$http', '$scope', function ($routeParams, $http, $scope) {
    var map, center_lat, center_long;
    var addr = $routeParams.city_id;
    
    //api for getting the restaurants from the city with the highest rating
    var newapi = "https://developers.zomato.com/api/v2.1/search?entity_id=" + addr + "&entity_type=city&apikey=234ee45c527e2306d02951fd1cf82a89&count=40&sort=rating&order=desc";
    $http.get(newapi).then(function (responce) {
        $scope.hotel = responce.data.restaurants;

//array for storing the lat, long and name of each fo the markers for the restaurants on the map
        var r = [];
        $scope.hotel.forEach(function (item) {
            r.push({
                latitude: item.restaurant.location.latitude,
                longitude: item.restaurant.location.longitude,
                name: item.restaurant.name
            })
        });


        var sumlat = 0;
        var sumlong = 0;
//clauculating the center of the map depending on the city chosen
        r.forEach(function (item) {
            sumlat += parseFloat(item.latitude);
            sumlong += parseFloat(item.longitude);
        });
        center_lat = sumlat / r.length;
        center_long = sumlong / r.length;

//initalizing the map with calculated center        
        var element = document.getElementById('map');
        map = new google.maps.Map(element, {
            zoom: 12,
            center: new google.maps.LatLng(center_lat, center_long),
            mapTypeId: 'terrain',
            tilt: 0
        });
       
//function call for marker placement
        eqfeed_callback(r);

    })
    
    //function to loop through the results array and place a marker for each
    // set of coordinates.
    function eqfeed_callback(markers) {
        map.center = new google.maps.LatLng(center_lat, center_long);
        for (var i = 0; i < markers.length; i++) {
            var latLng = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                restaurant: {
                    name: markers[i].name
                }
            });
        
//creating an infoWindow specific to the restaurant displaying the name
            var infoWndw = new google.maps.InfoWindow();
            marker.addListener('mouseover', function(){
                infoWndw.setContent('<div class="infoWindow">'+ this.restaurant.name+'</div>');
                infoWndw.open(map, this);
                activeInfoWindow = infoWndw;
            });
            marker.addListener('mouseout', function(){
                infoWndw.close();
            });
        }
    }
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.when("/", {
            templateUrl: "/main.html"
        }).when("/city/:city_id", {
            templateUrl: "templates/city.html",
            controller: "mycontroller"
        });
}
]);
