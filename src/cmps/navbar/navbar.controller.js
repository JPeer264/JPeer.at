angular
    .module('cmps.navbar')
    .controller('NavbarCtrl', NavbarController);

/**
 * @ngdoc controller
 * @name cmps.navbar:NavbarCtrl
 *
 * @requires $scope
 *
 * @description
 * The navbar component
 */
NavbarController.$inject = [
    '$scope',
];

function NavbarController($scope) {
    var self = this;
}
