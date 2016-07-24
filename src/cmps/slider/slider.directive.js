angular
    .module('cmps.slider')
    .directive('slider', sliderDirective);

/**
 * @ngdoc directive
 * @name cmps.slider:slider
 *
 * @description
 * Generates a single slider component
 */
function sliderDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'SliderCtrl',
            controllerAs: 'sliderCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/slider/slider.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function(scope, iElm, iAttrs, controller) {
                // @todo improve slider and make more functions - e.g. clickable
                // @todo add arrows
                // @todo add index position on bottom
                var self = this;
                var options = {
                    interval: 10000
                };
                var $slider = $('.jp-slider');
                var $items = $('.jp-slider__items');
                var $item = $('.jp-slider__item');
                var index = 0;

                setInterval(function() {
                    next();
                }, options.interval);

                function goToItem(index) {
                    // check if the last child index is reached
                    if (index < 0) {
                        index = $item.length - 1;
                    }

                    if (index > $item.length - 1) {
                        index = 0;
                    }

                    self.index = index;

                    // set new css property
                    $items.css({
                        transform: 'translateX(' + (-self.index * 100) + '%)'
                    });
                }

                function next() {
                    goToItem(self.index + 1);
                }

                function prev() {
                    goToItem(self.index - 1);
                }

            }
        };
};
