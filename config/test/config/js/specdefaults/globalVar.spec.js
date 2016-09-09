// Store references to $rootScope, $compile and $controller
// so they are available to all tests in this describe block
var $compile;
var $rootScope;
var $controller;

// beforeEach(module('jpeer'));

beforeEach(inject(function (_$compile_, _$rootScope_, _$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $controller = _$controller_;
 
}));
