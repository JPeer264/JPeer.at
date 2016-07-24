angular
	.module('pages.about')
	.controller('AboutCtrl', AboutController);

/**
 * @ngdoc controller
 * @name pages.about:AboutCtrl
 *
 * @requires $scope
 * @requires service.contentService
 *
 * @description
 * AboutCtrl for the about page
 */
AboutController.$inject = [
	'$scope',
    'contentService'
];

function AboutController($scope, contentService) {
    $scope.skills = (contentService.testData()).skills;
}