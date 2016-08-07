angular
    .module('cmps.mountains')
    .directive('mountains', mountainsDirective);

/**
 * @ngdoc directive
 * @name cmps.mountains:mountains
 *
 * @description
 * Generates a single mountains component
 */
function mountainsDirective() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: 'MountainsCtrl',
            controllerAs: 'mountainsCtrl',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'cmps/mountains/mountains.html',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                var speed = 120;
                var MountainRange = function (config) {
                    this.x = 0;
                    this.mountains = [];
                    this.layer = config.layer;
                    this.width = {
                        min: config.width.min,
                        max: config.width.max
                    };
                    this.height = {
                        min: config.height.min,
                        max: config.height.max
                    };
                    this.speed = config.speed;
                    this.color = config.color;
                    this.populate();

                    return this;
                };

                MountainRange.prototype.populate = function () {
                    var newHeight;
                    var newWidth;
                    var results;
                    var totalWidth;

                    totalWidth = 0;
                    results = [];

                    while (totalWidth <= sketch.width + this.width.max * 4) {
                        newWidth = round(random(this.width.min, this.width.max));
                        newHeight = round(random(this.height.min, this.height.max));
                        this.mountains.push(new JP.Mountain({
                            layer: this.layer,
                            x: this.mountains.length === 0 ? 0 : this.mountains[this.mountains.length - 1].x + this.mountains[this.mountains.length - 1].width,
                            y: sketch.height - newHeight,
                            width: newWidth,
                            height: newHeight,
                            color: this.color
                        }));
                        results.push(totalWidth += newWidth);
                    }

                    return results;
                };

                MountainRange.prototype.update = function () {
                    var firstMountain;
                    var lastMountain;
                    var newHeight;
                    var newWidth;

                    this.x -= speed * this.speed * dt;
                    firstMountain = this.mountains[0];

                    if (firstMountain.width + firstMountain.x + this.x < -this.width.max) {
                        newWidth = round(random(this.width.min, this.width.max));
                        newHeight = round(random(this.height.min, this.height.max));
                        lastMountain = this.mountains[this.mountains.length - 1];
                        firstMountain.reset({
                            layer: this.layer,
                            x: lastMountain.x + lastMountain.width,
                            y: sketch.height - newHeight,
                            width: newWidth,
                            height: newHeight,
                            color: this.color
                        });

                        return this.mountains.push(this.mountains.shift());
                    }
                };

                MountainRange.prototype.render = function () {
                    var c, d, i, j, pointCount, ref;

                    sketch.save();
                    // todo change with scroll
                    sketch.translate(this.x, (sketch.height - $(window).height()) / 20 * this.layer);
                    sketch.beginPath();
                    pointCount = this.mountains.length;
                    sketch.moveTo(this.mountains[0].x, this.mountains[0].y);

                    for (i = j = 0, ref = pointCount - 2; j <= ref; i = j += 1) {
                        c = (this.mountains[i].x + this.mountains[i + 1].x) / 2;
                        d = (this.mountains[i].y + this.mountains[i + 1].y) / 2;
                        sketch.quadraticCurveTo(this.mountains[i].x, this.mountains[i].y, c, d);
                    }

                    sketch.lineTo(sketch.width - this.x, sketch.height);
                    sketch.lineTo(0 - this.x, sketch.height);
                    sketch.closePath();
                    sketch.fillStyle = this.color;
                    sketch.fill();

                    return sketch.restore();
                };

                var dt = 1;
                var mountainRanges = [];
                var sketch = Sketch.create({
                    element: document.createElement('canvas'),
                    container: document.getElementById('jp-mountains__sketch'),
                    fullscreen: true
                });

                sketch.mouse.x = sketch.width / 10;
                sketch.mouse.y = sketch.height;

                sketch.setup = function () {
                    var i, results;
                    i = 5;
                    results = [];

                    while (i--) {
                        results.push(mountainRanges.push(new MountainRange({
                            layer: i + 1,
                            width: {
                                min: (i + 1) * 50,
                                max: (i + 1) * 70
                            },
                            height: {
                                min: 200 - i * 40,
                                max: 300 - i * 40
                            },
                            speed: (i + 1) * 0.003,
                            color: 'hsl( 210, ' + ((i + 1) * 1 + 23) + '%, ' + (76 - i * 13) + '% )',
                            sketch: sketch
                        })));
                    }

                    return results;
                };

                sketch.clear = function () {
                    return sketch.clearRect(0, 0, sketch.width, sketch.height);
                };

                sketch.update = function () {
                    var i, results;
                    dt = sketch.dt < 0.1 ? 0.1 : sketch.dt / 16;
                    dt = dt > 5 ? 5 : dt;
                    i = mountainRanges.length;
                    results = [];
                    while (i--) {
                        results.push(mountainRanges[i].update(i));
                    }
                    return results;
                };

                sketch.draw = function () {
                    var i, results;
                    i = mountainRanges.length;
                    results = [];
                    while (i--) {
                        results.push(mountainRanges[i].render(i));
                    }
                    return results;
                };
            }
        };
};
