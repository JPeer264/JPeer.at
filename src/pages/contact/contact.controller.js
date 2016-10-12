angular
	.module('pages.contact')
	.controller('ContactPageCtrl', ContactPageController);

/**
 * @ngdoc controller
 * @name pages.contact:ContactPageCtrl
 *
 * @requires $scope
 * @requires $http
 *
 * @description
 * ContactPageCtrl for the contact page
 */
ContactPageController.$inject = [
    '$scope',
    '$http'
];

function ContactPageController($scope, $http) {

    $scope.isSent = false;

    $scope.send = function () {
        return $http({
            url: 'https://mail.jpeer.at/',
            method: 'POST',
            data: $.param($scope.contact)
        }).then(function (data) {
            // todo disable form and inputs
            $scope.isSent = true;
        }, function (err){
            if (err) console.log(err);
        });
    };
}
