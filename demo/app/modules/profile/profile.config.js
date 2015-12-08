'use strict';

angular.module('demoApp.profile')
.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            template: 'Profile will be here',
            controller: function(){}            
    });
}]);


