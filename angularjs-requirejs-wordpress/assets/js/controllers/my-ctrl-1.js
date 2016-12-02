import controllers from './module';
import '../services/rest-service';

/* @ngInject */
function MyCtrl1($scope, RestService) {
  RestService.getUser((data) => {
    $scope.user = data;
  });
}

export default controllers.controller('MyCtrl1', MyCtrl1);
