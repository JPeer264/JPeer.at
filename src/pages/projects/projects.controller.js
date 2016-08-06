angular
	.module('pages.projects')
	.controller('ProjectsCtrl', ProjectsController);

/**
 * @ngdoc controller
 * @name pages.projects:ProjectsCtrl
 *
 * @requires $scope
 * @requires service.content
 *
 * @description
 * ProjectsCtrl for the projects page
 */
ProjectsController.$inject = [
    '$scope',
    'contentService'
];

function ProjectsController($scope, contentService) {
    $scope.projects = contentService.testData().projects;
}
