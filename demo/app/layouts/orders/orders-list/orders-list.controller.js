'use strict';

angular.module('demoApp.orders')
.controller('OrdersListCtrl', ['$scope', 'orders', function ($scope, orders) {
    $scope.orders = orders;
}]);