'use strict';

angular.module('demoApp.orders')
.directive('order', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/orders/order.directive.html'
    };
});


