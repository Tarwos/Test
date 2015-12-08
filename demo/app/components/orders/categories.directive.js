'use strict';

angular.module('demoApp.orders')
.directive('categories', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/orders/categories.directive.html'
    };
});


