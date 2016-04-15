define(['./module', '../services/rest-service'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', MyCtrl1);

    /* @ngInject */
    function MyCtrl1($scope, RestService) {
        RestService.getUser(function(data){
            $scope.user = data;
        });
    }
});
