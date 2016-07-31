angular
    .module('cmps.skills')
    .directive('skills', skillsDirective);

/**
 * @ngdoc directive
 * @name cmps.skills:skills
 * @scope
 *
 * @requires $timeout
 *
 * @description
 * Generates a single skills component.
 */
skillsDirective.$inject = [
    '$timeout',
    'RevealService'
];

function skillsDirective($timeout, RevealService) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                skills: '='
            }, // {} = isolate, true = child, false/undefined = no change
            controller: 'SkillsCtrl',
            controllerAs: 'skillsCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/skills/skills.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                // @todo check all tags and shorten them into plus if they are too long
                // @todo add default img if it is empty
                var revealSkills = function () {
                    var revealService = new RevealService();
                    var $trigger = $('.jp-skills');
                    var $setWidth = $(document).find('[data-jp-skill-percent]');

                    revealService.reveal($trigger, function() {
                        $setWidth.each(function () {
                            var $this = $(this);

                            $this.width($this.attr('data-jp-skill-percent') + '%');
                        });
                    });
                }

                $timeout(revealSkills, 0);
            }
        };
};
