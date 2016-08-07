angular
    .module('cmps.myServices')
    .controller('MyServicesCtrl', MyServicesController);

/**
 * @ngdoc controller
 * @name cmps.myServices:MyServicesCtrl
 *
 * @requires $scope
 *
 * @description
 * The.myServices component
 */
MyServicesController.$inject = [
    '$scope',
];

function MyServicesController($scope) {
    var self = this;
}
