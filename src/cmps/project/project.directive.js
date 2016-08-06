angular
    .module('cmps.project')
    .directive('project', projectDirective);

/**
 * @ngdoc directive
 * @name cmps.project:project
 * @scope
 *
 * @description
 * Generates a single project component.
 * The image alt attribute is defined by the title.
 *
 * @usage
 * <div data-project data-title="Project Example" data-tags="['webdesign', 'wordpress']" data-img="assets/img/test.png"></div>
 *
 * // in the foundation grid
 * <div class="row">
 *     <div class="columns small-12 medium-4" data-project data-title="Project Example" data-tags="['webdesign', 'wordpress']"  data-img="assets/img/test.png"></div>
 * </div>
 */
function projectDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                title: '=',
                tags: '=',
                img: '=',
                href: '='
            }, // {} = isolate, true = child, false/undefined = no change
            controller: 'ProjectCtrl',
            controllerAs: 'projectCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/project/project.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                // @todo check all tags and shorten them into plus if they are too long
                // @todo add default img if it is empty
            }
        };
};
