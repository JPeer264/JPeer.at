var CONSTANT = {
    "COOKIE": {
        "TOKEN": "tkn_u", // tkn_u = token_user
        "USER_ID": "u_i", // u_i = user_id
    }
};

angular.module('jpeer', [
    'ui.router',
    'jpeer.templates',
    'ngCookies',
    'pages',
    'service',
    'cmps',
    'pascalprecht.translate',
]);

angular
    .module('jpeer')
    .config(config)
    .run(run)
    .constant('CONSTANT', CONSTANT);

/**
 *
 */
config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$translateProvider',
];

function config($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider) {
    // redirect to home state when we call the page without route information
    // activate in proudction and set mod_rewrite to index.html
    $locationProvider.html5Mode(false);

    // activate translation
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.useMissingTranslationHandler(); // log if TRANSLATION_CODE not found
    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            views: {
                header: {
                    template: '<div data-header></div>',
                },
                main: {
                    templateUrl: 'pages/home/home.html',
                    controller: 'HomeCtrl'
                },
                footer: {
                    template: '<div data-footer></div>'
                }
            },
            data: {
                activetab: 'home',
            },
        })
        .state('about', {
            url: '/about',
            views: {
                header: {
                    template: '<div data-header></div>',
                },
                main: {
                    templateUrl: 'pages/about/about.html',
                    controller: 'AboutCtrl'
                },
                footer: {
                    template: '<div data-footer></div>'
                }
            },
            data: {
                activetab: 'about',
            },
        })
        .state('project', {
            url: '/project',
            views: {
                header: {
                    template: '<div data-header></div>',
                },
                main: {
                    templateUrl: 'pages/project/project.html',
                    controller: 'ProjectPageCtrl'
                },
                footer: {
                    template: '<div data-footer></div>'
                }
            },
            data: {
                activetab: 'project',
            },
        })
        .state('projects', {
            url: '/projects',
            views: {
                header: {
                    template: '<div data-header></div>',
                },
                main: {
                    templateUrl: 'pages/projects/projects.html',
                    controller: 'ProjectsCtrl'
                },
                footer: {
                    template: '<div data-footer></div>'
                }
            },
            data: {
                activetab: 'projects',
            },
        })
        .state('contact', {
            url: '/contact',
            views: {
                header: {
                    template: '<div data-header></div>',
                },
                main: {
                    templateUrl: 'pages/contact/contact.html',
                    controller: 'ContactCtrl'
                },
                footer: {
                    template: '<div data-footer></div>'
                }
            },
            data: {
                activetab: 'contact',
            },
        });
};

// run method
run.$inject = [
    '$rootScope',
    '$location',
    '$http',
    '$stateParams',
    '$window',
    '$state'
];

function run($rootScope, $location, $http, $stateParams, $window, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
    });
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['jpeer']);
});
