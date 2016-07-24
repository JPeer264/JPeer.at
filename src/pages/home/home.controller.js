angular
	.module('pages.home')
	.controller('HomeCtrl', HomeController);

/**
 * @ngdoc controller
 * @name pages.home:HomeCtrl
 *
 * @requires $scope
 *
 * @description
 * HomeCtrl for the home page
 */
HomeController.$inject = [
    '$scope'
];

function HomeController($scope) {
    console.log('home page');
}
