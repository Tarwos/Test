demoApp.factory('orderFactory', function ($http) {
    var _factory = {};
    var orders = $http({
            method: 'GET',
            url: 'data/orders.json',
            cache: true
        }).then(function(response){
            return response.data;
        });
    _factory.getAll = function () {
        return orders;
    };
    _factory.get = function (id) {
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
        var result = orders.then(function(response){
            return response.filter(function(order){
                return order.category === id;
            });
        });
        return result;
    };
    return _factory;
});



