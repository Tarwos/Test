demoApp.controller('OrdersCtrl', ['$scope', 'orders', function ($scope, orders) {
    $scope.orders = orders;
}]);