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
            ], // /skills

            projects: [
                {
                    title: 'JPeer.at',
                    href: '/',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'wordpress',
                        'design',
                        'angular'
                    ]
                },
                {
                    title: 'SchwarzKönig',
                    href: 'http://www.schwarz-koenig.at',
                    img: 'assets/img/responsive-default.png',
                    tags: [
                        'wordpress',
                        'design',
                        'deploy'
                    ]
                },
                {
                    title: 'et-grunt',
                    href: '#https://github.com/JPeer264/et-grunt',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'nodejs',
                        'grunt'
                    ]
                },
                {
                    title: 'hasten prototype',
                    href: '#https://github.com/JPeer264/hasten',
                    img: 'assets/img/github-logo.png',
                    tags: [
                        'nodejs'
                    ]
                },
                {
                    title: 'Somnia',
                    href: '#http://www.prazna.at/',
                    img: 'assets/img/responsive-default.png',
                    tags: [
                        '48h project',
                        'design',
                        'concept'
                    ]
                },
                {
                    title: 'Prazna Bikes',
                    href: '#http://www.prazna.at/',
                    img: 'assets/img/responsive-default.png',
                    tags: [
                        'joomla',
                        'design'
                    ]
                },
                {
                    title: 'Portal Bee',
                    href: '#',
                    img: 'assets/img/portal-bee.png',
                    tags: [
                        'photography',
                        'canon'
                    ]
                },
                {
                    title: 'Volxpop',
                    href: '#http://www.volxpop-music.at/',
                    img: 'assets/img/responsive-default.png',
                    tags: [
                        'wordpress',
                        'design',
                        'concept'
                    ]
                }
            ], // /projects

            slider: [
               {
                    href: 'assets/img/slider/hoverfly.jpg',
                    alt: 'Hoverfly slider'
               },
               {
                    href: 'assets/img/slider/fish.jpg',
                    alt: 'Fish slider'
               }
            ] // /slider
        }
    };
}