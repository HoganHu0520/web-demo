import controllers from './module';
import '../services/rest-service';

export default controllers.controller('MyCtrl1', MyCtrl1);

/* @ngInject */
function MyCtrl1($scope, RestService) {
    RestService.getUser(function(data){
        $scope.user = data;
    });
}
