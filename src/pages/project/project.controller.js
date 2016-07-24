angular
	.module('pages.project')
	.controller('ProjectCtrl', ProjectController);

/**
 * @ngdoc controller
 * @name pages.project:ProjectCtrl
 *
 * @requires $scope
 *
 * @description
 * ProjectCtrl for the project page
 */
ProjectController.$inject = [
    '$scope'
];

function ProjectController($scope) {
    console.log('project page');
}
