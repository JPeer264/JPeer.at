// has to overwrite XHR method of angular.translate
// https://angular-translate.github.io/docs/#/guide/22_unit-testing-with-angular-translate
beforeEach(module('jpeer', function ($provide, $translateProvider) {
 
  $provide.factory('customLoader', function ($q) {
    return function () {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    };
  });
 
  $translateProvider.useLoader('customLoader');
 
}));