angular
	.module('pages.projects')
	.controller('ProjectsCtrl', ProjectsController);

/**
 * @ngdoc controller
 * @name pages.projects:ProjectsCtrl
 *
 * @requires $scope
 *
 * @description
 * ProjectsCtrl for the projects page
 */
ProjectsController.$inject = [
    '$scope'
];

function ProjectsController($scope) {
    console.log('projects page');
}
