'use strict';

angular.module('demoApp.orders')
.controller('OrderDetailsCtrl', ['$scope', 'order', function ($scope, order) {
    $scope.order = order;
}]);


