angular
	.module('pages.projects')
	.controller('ProjectsCtrl', ProjectsController);

/**
 * @ngdoc controller
 * @name pages.projects:ProjectsCtrl
 *
 * @requires $scope
 * @requires service.content
 * @requires service.px
 *
 * @description
 * ProjectsCtrl for the projects page
 */
ProjectsController.$inject = [
    '$scope',
    'contentService',
    'pxService'
];

function ProjectsController($scope, contentService, pxService) {
    // @todo put right format from 500px to $scope.projects
    // @todo shuffle $scope.projects with 500px pictures in it
    pxService.getPictures().then(function (data, err) {
        var pxImages;

        if (err) console.log(err);

        pxImages = data.data.photos;

        console.log(pxImages);

        $scope.projects = contentService.testData().projects;
    });

}
