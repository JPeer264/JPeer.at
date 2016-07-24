angular
    .module('cmps.project')
    .controller('ProjectCtrl', ProjectController);

/**
 * @ngdoc controller
 * @name cmps.project:ProjectCtrl
 *
 * @requires $scope
 *
 * @description
 * The project component
 */
ProjectController.$inject = [
    '$scope',
];

function ProjectController($scope) {
    var self = this;
}
