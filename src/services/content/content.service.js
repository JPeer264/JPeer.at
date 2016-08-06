/**
* service.content Module
*
* Description
*/
angular.
    module('service.content').
    service('contentService', contentService);

contentService.$inject = [
    '$rootScope',
    '$http'
];

function contentService($rootScope, $http) {

    this.testData = function() {
        return {

            skills: [
                {
                    skill: 'HTML',
                    percent: 66,
                    type: 'programming',
                    framework: false,
                    color: '#EE5F29'
                },
                {
                    skill: 'JavaScript',
                    percent: 73,
                    type: 'programming',
                    framework: false,
                    color: '#76B416'
                },
                {
                    skill: 'CSS',
                    percent: 70,
                    type: 'programming',
                    framework: false,
                    color: '#0086C7'
                },
                {
                    skill: 'PHP',
                    percent: 50,
                    type: 'programming',
                    framework: false,
                    color: '#7091CB'
                },
                {
                    skill: 'Laravel',
                    percent: 40,
                    type: 'programming',
                    framework: {
                        type: 'php'
                    },
                    color: '#f4645f'
                },
                {
                    skill: 'Lightroom',
                    percent: 68,
                    type: 'design',
                    framework: false,
                },
            ], // skills end

            projects: [
                {
                    title: 'JPeer.at',
                    href: '/',
                    img: 'assets/img/me_bw.png',
                    tags: [
                        'wordpress',
                        'design',
                        'angular'
                    ]
                },
                {
                    title: 'SchwarzKönig',
                    href: '#schwarz-koenig',
                    img: 'https://www.nyfa.edu/student-resources/wp-content/uploads/2014/06/Landscape-Sunset.jpg',
                    tags: [
                        'wordpress',
                        'design',
                        'deploy'
                    ]
                },
                {
                    title: 'et-grunt',
                    href: '#et-grunt',
                    img: 'assets/img/me_bw.png',
                    tags: [
                        'nodejs',
                        'grunt'
                    ]
                },
                {
                    title: 'hasten prototype',
                    href: '#hasten',
                    img: 'assets/img/me_bw.png',
                    tags: [
                        'nodejs'
                    ]
                }
            ]
        }
    };
}