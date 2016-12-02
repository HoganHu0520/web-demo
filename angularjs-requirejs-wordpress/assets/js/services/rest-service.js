import services from './module';

/* @ngInject */
function RestService($http) {
  const getUser = (success, error) => {
    $http({
      method: 'GET',
      url: `${ajaxInfo.api_url}user?name=hello`,
      data: {
        name: 'hogan',
      },
    }).success((data, status) => {
      if (success) {
        success(data, status);
      }
    }).error((data, status) => {
      if (error) {
        error(data, status);
      }
    });
  };

  return {
    getUser,
  };
}

export default services.factory('RestService', RestService);
