import directives from './module';

export default directives.directive('appVersion', ['version',
  (version) => {
    return (scope, elm) => {
      elm.text(version);
    };
  },
]);
