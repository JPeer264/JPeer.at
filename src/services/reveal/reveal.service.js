/**
* service.reveal Module
*
* Description
*/
angular.
module('service.reveal').
factory('RevealService', RevealService);

/**
 * @ngdoc factory
 * @name service.reveal:RevealService
 *
 * @description
 */
RevealService.$inject = [
'$rootScope'
];

function RevealService ($rootScope) {
    function RevealService () {
        var self = this;

        self.height = $(document).height();
        self.scroll = 0;
        self.options = {};
    }

    RevealService.prototype.defaults = {
        triggerHeight: ($(window).height()) * 0.8,
        delayedTriggerHeight: 0
    }

    /**
     *
     */
    RevealService.prototype.reveal = function (options, $trigger, beforeCb, afterCb) {
        var self = this;

        if (options instanceof $) {
            afterCb = beforeCb;
            beforeCb = $trigger;
            $trigger = options;
            options = {};
        }

        self.custom(options, $trigger, function() {
            var thisOffsetTop = $trigger.offset().top;

            if (thisOffsetTop - self.options.triggerHeight < self.scroll) {
                if (typeof beforeCb === 'function') beforeCb($trigger, self);
            }
            else {
                if (typeof afterCb === 'function') afterCb($trigger, self);
            }
        });
    }

    RevealService.prototype.custom = function (options, $trigger, cb) {
        var self = this;

        if (options instanceof $) {
            cb = cb;
            $trigger = options;
            options = {};
        }

        self.options = $.extend({}, self.defaults, options);

        var $window = $(window);
        var windowHeight = $window.height();
        var scroll;

        $(document).scroll(function () {
            var thisOffsetTop = $trigger.offset().top;
            var thisPosition = $trigger.position();
            self.scroll = $window.scrollTop();

            if (typeof cb === 'function') cb($trigger, self);
        });
    }

    return RevealService;
}
