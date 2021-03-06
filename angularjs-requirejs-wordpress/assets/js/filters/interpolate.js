import filters from './module';

export default filters.filter('interpolate', ['version', (version) => {
  return (text) => {
    return String(text).replace(/VERSION/mg, version);
  };
}]);
