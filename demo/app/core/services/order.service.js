'use strict';

angular.module('demoApp.services')
.factory('orderService', ['$http', function ($http) {
    var _factory = {};
    var orders;
    _factory.getAll = function () {
        orders = $http({
            method: 'GET',
            url: 'assets/orders.json',
            cache: true
        }).then(function(response){
            return response.data;
        });
        return orders;
    };
    _factory.get = function (id) {
        if ( !orders ) {
            this.getAll();
        }
        var result = orders.then(function(response){
            var object;
            response.some(function(order){
                if (order.id === id) {
                    object = order;
                    return true;
                }
            });
            return object;
        });
        return result;
    };
    _factory.getRelatedToCategory = function (id) {
        if ( !orders ) {
            this.getAll();
        }
        var result = orders.then(function(response){
            return response.filter(function(order){
                return order.category === id;
            });
        });
        return result;
    };
    return _factory;
}]);



