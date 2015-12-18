'use strict';

angular.module('demoApp')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/'
        });
}]);

/*comment*/
// 1

// 2


