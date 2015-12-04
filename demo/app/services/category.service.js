demoApp.factory('categoryFactory', function ($http) {
    var _factory = {};
    var categories;
    _factory.getAll = function () {
        categories = $http({
            method: 'GET',
            url: 'assets/categories.json',
            cache: true
        }).then(function(response){
            return response.data;
        });
        return categories;
    };
    return _factory;
});

