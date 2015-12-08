'use strict';

angular.module('demoApp.orders')
.controller('CategoriesListCtrl', ['$scope', 'categories', function ($scope, categories) {
    $scope.categories = categories;
}]);