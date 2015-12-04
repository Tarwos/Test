demoApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('categories', {
            url: '/',
            views: {
                'categories-list': {
                    templateUrl: 'app/layouts/categories.html',            
                    resolve: {
                        categories: function(categoryFactory) {
                            return categoryFactory.getAll();
                        }
                    },
                    controller: 'CategoriesCtrl'
                }
            }
        })
        .state('categories.orders', {
            url: 'category/{categoryId}',
            views: {
                'orders-list@': {
                    templateUrl: 'app/layouts/orders.html',
                    resolve: {
                        orders: function($stateParams, orderFactory) {
                            return orderFactory.getRelatedToCategory( $stateParams.categoryId );
                        }
                    },
                    controller: 'OrdersCtrl'
                }
            }
        })
        .state('categories.orders.details', {
            url: '/:orderId',
            views: {
                'order-detail@': {
                    templateUrl: 'app/layouts/order-details.html',
                    resolve: {
                        order: function($stateParams, orderFactory) {
                            return orderFactory.get( $stateParams.orderId );
                        }
                    },
                    controller: 'OrderDetailCtrl'
                }
            }
        });
}]);



