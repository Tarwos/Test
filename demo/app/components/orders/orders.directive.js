'use strict';

angular.module('demoApp.orders')
.directive('orders', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/orders/orders.directive.html'        
    };
});

