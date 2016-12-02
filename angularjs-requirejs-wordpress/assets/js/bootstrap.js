/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */

 import { angular as ng } from './app';
 import './routes';
 import '../less/app.less';

ng.bootstrap(document, ['app']);
