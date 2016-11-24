angular
    .module('hwApp')
    .controller('hwCtrl', function ($scope, hwFactory) {
        $scope.hello = "Hello World!!!";
        $scope.data;
        $scope.priceInfo = {
            min: 0,
            max: 10000000
        };

        $scope.newListing = {};

        $scope.addData = function (newListing) {
            $scope.data.push(newListing);
            $scope.newListing = {};
        }

        hwFactory.getData().success(function (data) {
            $scope.data = data;
        }).error(function (error) {
            console.log(error);
        });

        $scope.sayHello = function() {
            console.log("Hello World!");
        }

        $scope.name = "John";

        $scope.countries;
        hwFactory.getCountry().success(function (data) {
            $scope.countries = data;
        }).error(function (error) {
            console.log(error);
        });
    });