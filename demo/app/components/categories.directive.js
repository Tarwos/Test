demoApp.directive('categories', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/categories.directive.html',
        scope: {
            categories: '=list'
        }
    };
});


