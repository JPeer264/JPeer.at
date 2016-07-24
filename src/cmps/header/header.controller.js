angular
    .module('cmps.header')
    .controller('HeaderCtrl', HeaderController);

/**
 * @ngdoc controller
 * @name cmps.header:HeaderCtrl
 *
 * @requires $scope
 *
 * @description
 * The header component
 */
HeaderController.$inject = [
    '$scope',
];

function HeaderController($scope) {
    var self = this;
}
