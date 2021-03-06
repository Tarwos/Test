'use strict';

angular.module('demoApp.orders')
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('orders', {
            url: '/orders',
            abstract: true,
            templateUrl: 'app/layouts/orders/orders.html',
            resolve: {
                categories: ['categoryService', function(categoryService) {
                    return categoryService.getAll();
                }]
            },
        })
        .state('orders.categories_list', {
            url: '',
            views: {
                'categories-list': {
                    templateUrl: 'app/layouts/orders/categories-list/categories-list.html',                   
                    controller: 'CategoriesListCtrl'
                }
            }            
        })
        .state('orders.categories_list.order_list', {
            url: '/category/{categoryId}',
            views: {
                'orders-list@orders': {
                    templateUrl: 'app/layouts/orders/orders-list/orders-list.html',
                    resolve: {
                        orders: ['$stateParams', 'orderService', function($stateParams, orderService) {
                            return orderService.getRelatedToCategory( $stateParams.categoryId );
                        }]
                    },
                    controller: 'OrdersListCtrl'
                }
            }
        })
        .state('orders.categories_list.order_list.details', {
            url: '/:orderId',
            views: {
                'order-details@orders': {
                    templateUrl: 'app/layouts/orders/order-details/order-details.html',
                    resolve: {
                        order: ['$stateParams', 'orderService', function($stateParams, orderService) {
                            return orderService.get( $stateParams.orderId );
                        }]
                    },
                    controller: 'OrderDetailsCtrl'
                }
            }
        });
}]);


