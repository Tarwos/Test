demoApp.directive('orders', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/orders.directive.html',
        scope: {
            orders: '=list'
        }
    };
});

