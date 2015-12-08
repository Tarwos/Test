'use strict';

angular.module('demoApp.profile')
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: 'app/layouts/profile/profile.html',
            controller: 'ProfileCtrl'
    });
}]);


