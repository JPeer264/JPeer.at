angular
	.module('pages.about')
	.controller('AboutCtrl', AboutController);

/**
 * @ngdoc controller
 * @name pages.about:AboutCtrl
 *
 * @requires $scope
 *
 * @description
 * AboutCtrl for the about page
 */
AboutController.$inject = [
	'$scope'
];

function AboutController($scope) {
    console.log('About page');
}