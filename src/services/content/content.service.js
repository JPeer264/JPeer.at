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

            'skills': [
                {
                    'skill': 'HTML',
                    'percent': '66',
                    'type': 'programming',
                    'framework': false,
                    'color': '#EE5F29'
                },
                {
                    'skill': 'JavaScript',
                    'percent': '73',
                    'type': 'programming',
                    'framework': false,
                    'color': '#76B416'
                },
                {
                    'skill': 'CSS',
                    'percent': '70',
                    'type': 'programming',
                    'framework': false,
                    'color': '#0086C7'
                },
                {
                    'skill': 'PHP',
                    'percent': '50',
                    'type': 'programming',
                    'framework': false,
                    'color': '#7091CB'
                },
                {
                    'skill': 'Laravel',
                    'percent': '40',
                    'type': 'programming',
                    'framework': {
                        'type': 'php'
                    },
                    'color': '#f4645f'
                },
                {
                    'skill': 'Lightroom',
                    'percent': '68',
                    'type': 'design',
                    'framework': false,
                },
            ], // skills end
        }
    };
}