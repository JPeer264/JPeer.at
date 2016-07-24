angular
    .module('cmps.skills')
    .controller('SkillsCtrl', SkillsController);

/**
 * @ngdoc controller
 * @name cmps.skills:SkillsCtrl
 *
 * @requires $scope
 * @requires $timeout
 *
 * @description
 * The skills component
 */
SkillsController.$inject = [
    '$scope',
    '$timeout'
];

function SkillsController($scope, $timeout) {
    var self = this;

    $timeout(function() {
        self.percent = function (value) {
            return value;
        };
    }, 500);
}
