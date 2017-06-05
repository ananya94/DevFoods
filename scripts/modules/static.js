//getting 15 restaurants with the highest rating
var static1 = angular.module("static", []);
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
static1.controller("searchRes", function ($http, $scope) {
    getlocation();
    $("body").addClass("container1")
});

var getlocation = function () {
    $("#tags").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "https://developers.zomato.com/api/v2.1/cities",
                dataType: "jsonp",
                data: {
                    q: request.term,
                    count: 5,
                    apikey: '234ee45c527e2306d02951fd1cf82a89'
                },
                success: function (data) {
                    data = data.locationSuggestions;
                    return_val = [];
                    $.each(data, function (key, val) {
                        return_val.push({
                            label: val.name,
                            city_id: val.id
                        });
                    })
                    response(return_val);
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            $('#selected_city_id').val(ui.item.city_id);
        }
    });
};

function city_redirect() {
    if ($('#selected_city_id').val() != '') // to check if user selected a city
        window.location.hash = '#!/city/' + $('#selected_city_id').val();
}

//directive for navigation bar
static1.directive("navBar", function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/navbar.html'
    }
});

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
