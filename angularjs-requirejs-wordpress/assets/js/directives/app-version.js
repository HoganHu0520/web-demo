import directives from './module';
export default directives.directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
        elm.text(version);
    };
}]);
