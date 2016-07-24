angular
    .module('cmps.footer')
    .controller('FooterCtrl', FooterController);

/**
 * @ngdoc controller
 * @name cmps.footer:FooterCtrl
 *
 * @requires $scope
 *
 * @description
 * The footer component
 */
FooterController.$inject = [
    '$scope',
];

function FooterController($scope) {
    var self = this;
}
