var demoApp = angular.module('demoApp', [
    "ui.router"
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('categories', {
            url: '/',
            templateUrl: 'categories.html',
            resolve: {
                categories: function(categoryFactory) {
                    return categoryFactory.getAll();
                }
            },
            controller: function ($scope, $state, categories) {
                $scope.categories = categories;
            }
        })
        .state('categories.orders', {
            url: 'category/{categoryId}',
            views: {
                '': {
                    templateUrl: 'orders.html',
                    resolve: {
                        orders: function($stateParams,orderFactory) {
                            return orderFactory.getRelatedToCategory( $stateParams.categoryId );
                        }
                    },
                    controller: function ($scope, orders) {
                        $scope.orders = orders;
                    }
                }
            }
        })
        .state('categories.orders.details', {
            url: '/{orderId}',
            views: {
                '': {
                    templateUrl: 'order-details.html',
                    resolve: {
                        order: function($stateParams,orderFactory) {
                            return orderFactory.get( $stateParams.orderId );
                        }
                    },
                    controller: function ($scope, order) {
                        $scope.order = order;
                    }
                }
            }
        });
}]);



