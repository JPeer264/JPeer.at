var JP = JP || {};

JP.Mountain = (function ($) {

    /**
     * @constructor
     */
    var Mountain = function (config) {
        return this.reset(config);
    };

    Mountain.prototype.reset = function (config) {
        this.layer = config.layer;
        this.x = config.x;
        this.y = config.y;
        this.width = config.width;
        this.height = config.height;

        return this.color = config.color;
    };

    return Mountain;
}(jQuery));