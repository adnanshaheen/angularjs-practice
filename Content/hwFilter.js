angular
    .module('hwApp')
    .filter('hwFilter', function () {
        return function (input, uppercase) {
            var output;

            for (var i = 0; i < input.length; i++) {
                output = input.charAt(i) + output;
            }
            if (uppercase)
                output = output.toUpperCase();

            return output;
        }
    });