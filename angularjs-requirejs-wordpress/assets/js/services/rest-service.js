define([
    './module'
], function(services) {
    'use strict';
    services.factory('RestService', RestService);

    /* @ngInject */
    function RestService($http) {
        var getUser = function(success, error) {
            $http({
                method: 'GET',
                url: ajaxInfo.api_url + 'user?name=hello',
                data: {
                    name: "hogan"
                }
            }).success(function(data, status) {
                if (success) {
                    success(data, status);
                }
            }).error(function(data, status) {
                if (error) {
                    error(data, status);
                }
            });
        };

        return {
            getUser: getUser
        };
    }
});