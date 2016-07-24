angular
    .module('cmps.contact')
    .controller('ContactCtrl', ContactController);

/**
 * @ngdoc controller
 * @name cmps.contact:ContactCtrl
 *
 * @requires $scope
 *
 * @description
 * The contact component
 */
ContactController.$inject = [
    '$scope',
];

function ContactController($scope) {
    var self = this;
}
