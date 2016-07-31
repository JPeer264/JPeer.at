var JP = JP || {};

JP.SelectorCache = (function ($) {

    /**
     * @constructor
     */
    function SelectorCache() {
        this.collection = {};
    }

    SelectorCache.prototype.get = function (selector) {
        if (!this.collection[selector]) {
            this.collection[selector] = $(selector);
        }

        return this.collection[selector];
    }

    SelectorCache.prototype.clean = function (selector) {
        var self = this;

        if (!selector || self.collection[selector]) {
            self.collection = {};
            return self;
        }

        self.collection[selector] = undefined;

        return self;
    }

    return SelectorCache;
}(jQuery));
