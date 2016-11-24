angular
    .module('hwApp')
    .factory('hwFactory', function ($http) {

        function getData() {
            return $http.get('../Content/data.json');
        }

        function getCountry() {
            return $http.get('../Content/country.json');
        }

        return {
            getData: getData,
            getCountry: getCountry
        }
    });