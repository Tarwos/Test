demoApp.factory('categoryFactory', function ($http) {
    var _factory = {};
    var categories = $http({
            method: 'GET',
            url: 'data/categories.json',
            cache: true
        }).then(function(response){
            return response.data;
        });
    _factory.getAll = function () {
        return categories;
    };
    return _factory;
});

