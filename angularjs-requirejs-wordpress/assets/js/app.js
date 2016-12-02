/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
import ng from 'angular';
import 'angular-route';
import './controllers/index';
import './directives/index';
import './filters/index';
import './services/index';

export const app = ng.module('app', [
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services',
  'ngRoute',
]);

export const angular = ng;
