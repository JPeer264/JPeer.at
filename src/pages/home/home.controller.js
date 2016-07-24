angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 * @requires service.contentService
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope',
    'contentService'
];

function HomeController($scope, contentService) {
    $scope.skills = (contentService.testData()).skills;
}
