demoApp.directive('order', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/order.directive.html',
        scope: {
            order: '='
        }
    };
});


