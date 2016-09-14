angular
    .module('cmps.pictureArray')
    .directive('pictureArray', pictureArrayDirective);

/**
 * @ngdoc directive
 * @name cmps.pictureArray:pictureArray
 * @scope
 *
 * @description
 * Generates a single pictureArray component.
 */
function pictureArrayDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'PictureArrayCtrl',
            controllerAs: 'pictureArrayCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/pictureArray/pictureArray.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
            }
        };
};
