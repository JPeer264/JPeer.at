angular
    .module('cmps.timeline')
    .directive('timeline', timelineDirective);

/**
 * @ngdoc directive
 * @name cmps.timeline:timeline
 *
 * @description
 * Generates a single timeline component.
 */
function timelineDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'TimelineCtrl',
            controllerAs: 'timelineCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/timeline/timeline.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
            }
        };
};
