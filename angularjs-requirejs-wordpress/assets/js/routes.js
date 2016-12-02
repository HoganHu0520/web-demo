/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

import { app } from './app';
import partial1 from '../tpl/partial1.html';
import partial2 from '../tpl/partial2.html';

export default app.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/view1', {
    template: partial1,
    controller: 'MyCtrl1',
  });

  $routeProvider.when('/view2', {
    template: partial2,
    controller: 'MyCtrl2',
  });

  $routeProvider.otherwise({
    redirectTo: '/view1',
  });
}]);
