/*
 * @start Managing Files
 *
 * @prod
 *
 * @used plugins
 *   ** concat   <- merges all files together
 *   ** sass     <- convert from `scss` to `css`
 *   ** clean    <- delete folder and files
 *   ** copy     <- copy files from one dir to another
 *   ** cdnify   <- rewrite HTML files from *.css to *.min.css or *.js
 *   ** html2js  <- 4 angularJS. Make own module for all components
 */
module.exports = {
    concat: {
        // concat all js files in assets, excluding possible vendor files
        js: {
            options: {
                process: function(src, filepath) {
                    return "// Source: " + filepath + "\n" +
                            "'use strict';\n" +
                            src
                },
            },
            files: [
                {
                    src: [
                        '<%= paths.src.files.assets.js %>',
                        '<%= paths.src.ignore.couldBeVendor %>'
                    ],
                    dest: '<%= paths.tmp.folder.assets.js %>/main.js'
                }
            ]
        },

        // concat all vendor files
        vendor: {
            options: {
                // add the sourcefile as comment
                process: function(src, filepath) {
                    return '/* Source: ' + filepath + '*/\n' + src
                }
            },
            files: [{
                src: [
                    '<%= paths.tmp.folder.assets.js %>/bower.js',
                    '<%= paths.src.files.couldBeVendor.js %>',
                    '<%= paths.vendor.js %>',
                    '<%= paths.src.ignore.min %>'
                ],
                dest: '<%= paths.tmp.folder.assets.js %>/vendor.js'
            }]
        },

        // concat all angular files
        app: {
            options: {
                process: function(src, filepath) {
                    return "// Source: " + filepath + "\n" +
                            "'use strict';\n" +
                                src;
                }
            },
            files: [{
                src: [
                    '<%= paths.src.files.angular.all %>',
                    '<%= paths.tmp.folder.assets.js %>/template.js'
                ],
                dest: '<%=paths.tmp.folder.assets.js %>/app.js'
            }]
        },

        // concat all tests and instrumented files
        tests: {
            files: {
                '<%= paths.tmp.folder.tests.base %>/js/tests.js': '<%= paths.src.tests %>',
                '<%= paths.tmp.folder.tests.js %>/instrument.js': '<%= paths.tmp.files.instrumented %>',
                '<%= paths.tmp.folder.tests.js %>/vendor.js' : [
                    '<%= paths.tmp.folder.assets.js %>/bower.js',
                    '<%= paths.src.files.couldBeVendor.js %>',
                    '<%= paths.vendor.js %>',
                    '<%= paths.src.ignore.min %>'
                ]
            }
        },

        // concat all scss files
        scss: {
            options: {
                // add the sourcefile as comment
                process: function(src, filepath) {
                    return '/* Source: ' + filepath + '*/\n' + src
                }
            },
            files: [
                {
                    src: '<%= paths.src.files.scss %>',
                    dest: '<%= paths.src.folder.assets.scss %>/createdFileByGrunt.scss'
                }
            ]
        },

        // concat all css files
        css: {
            options: {
                // add the sourcefile as comment
                process: function(src, filepath) {
                    return '/* Source: ' + filepath + '*/\n' + src
                }
            },
            files: [{
                    src: [
                        '<%= paths.vendor.css %>',
                        '<%= paths.tmp.folder.assets.css %>/SassFiles.css',
                        '<%= paths.src.files.css %>',
                    ],
                    dest: '<%= paths.tmp.folder.assets.css %>/global.css'
            }]
        },
    },

    bower_concat: {
        all: {
            dest: '<%= paths.tmp.folder.assets.js %>/bower.js',
            bowerOptions: {
                relative: false
            },
            exclude: [
                'angular-i18n'
            ],
            dependencies: {
                'angular': 'jquery'
            },
            process: function(src, filepath) {
                return '/* Bower_Source: ' + filepath + '*/\n' + src
            } ,
            callback: function(file, comp) {
                return file;
            }
        }
    },

    sass: {
        dev: {
            src: '<%=  paths.src.folder.assets.scss %>/createdFileByGrunt.scss',
            dest: '<%= paths.tmp.folder.assets.css %>/SassFiles.css'
            // '<%=paths.tmp.css%>/global.css' : '<%=paths.tmp.scss%>/build.scss'
        }
    },

    clean: {
        tmp: {
            src: '<%= paths.tmp.base %>'
        },

        dist: {
            src: '<%= paths.dest.base %>'
        },

        cache: {
            src: '<%= paths.cache.scss %>'
        },

        tests: {
            src: '<%= paths.tmp.folder.tests.base %>'
        },

        createdSassByGrunt: {
            src: [
                '<%= paths.src.folder.assets.scss %>/createdFileByGrunt.scss',
                '<%= paths.tmp.folder.assets.css %>/SassFiles.css',
            ]
        },
        bower: {
            src: '<%= paths.tmp.folder.assets.js %>/bower.js'
        },
        template: {
            src: '<%= paths.tmp.folder.assets.js %>/template.js'
        },
        docs: {
            src: '<%= paths.docs %>'
        }
    },

    copy: {
        dev: {
            files: [
                // copy all images, svgs and jsons from assets
                {
                    expand: true,
                    cwd: '<%= paths.src.folder.assets.base %>',
                    src: ['**/**', '!js/**', '!scss/**'],
                    dest: '<%= paths.tmp.folder.assets.base %>'
                },

                // copy index.html file
                {
                    expand: true,
                    cwd: '<%= paths.src.base %>',
                    src: [
                        'index.html',
                        'i18n/**'
                    ],
                    dest: '<%= paths.tmp.base %>/'
                },
                {
                    expand: true,
                    cwd: './bower_components/angular-i18n',
                    src: '*.js',
                    dest: '<%= paths.tmp.base %>/i18n/angular/'
                },
                {
                    expand: true,
                    cwd: '<%= paths.src.base %>',
                    src: ['.htaccess', 'favicon.ico'],
                    dest: '<%= paths.tmp.base %>'
                }
            ]
        },

        prod: {
            files: [
                // copy all images, svgs and jsons from assets
                {
                    expand: true,
                    cwd: '<%= paths.src.folder.assets.base %>',
                    src: ['**/**', '!js/**', '!scss/**'],
                    dest: '<%= paths.dest.folder.assets.base %>'
                },

                // copy index.html file
                {
                    expand: true,
                    cwd: '<%= paths.src.base %>',
                    src: [
                        'index.html',
                        'i18n/**'
                    ],
                    dest: '<%= paths.dest.base %>'
                },
                {
                    expand: true,
                    cwd: './bower_components/angular-i18n',
                    src: '*.js',
                    dest: '<%= paths.dest.base %>/i18n/angular/'
                },
                {
                    expand: true,
                    cwd: '<%= paths.src.base %>',
                    src: ['.htaccess', 'favicon.ico'],
                    dest: '<%= paths.dest.base %>'
                }
            ]
        },

        cache_sass: {
            files: [{
                expand: true,
                cwd: '<%= paths.src.base %>',
                src: '**/*.scss',
                dest: '<%= paths.cache.sass %>'
            }]
        },

        vendor: {
            files: [{
                expand: true,
                cwd: '<%= paths.tmp.folder.assets.js %>',
                src: 'vendor.js',
                dest: '<%= paths.dest.folder.assets.js %>',
                ext: '.min.js'
            }]
        },

        tests: {
            files: [{
                expand: true,
                cwd: './config/test',
                src: [
                    '**'
                ],
                dest: '<%= paths.tmp.folder.tests.base %>'
            }]
        }
    },

    cdnify: {
        prod: {
            options: {
                rewriter: function (url) {
                    var arr = url.split('.');

                    // small hack for google fonts or cdn's with http requests
                    for (var value of arr) {
                        if (value.indexOf('google') === 0) {
                            return;
                        }

                        if (value.indexOf('http') === 0) {
                            return;
                        }
                    }

                    if (arr[arr.length - 2] !== 'min') {
                        arr.splice((arr.length - 1), 0, 'min');
                    }

                    return arr.join('.');
                },
                css: false,
                html: {
                    'img[src]': false,
                    'video[poster]': false,
                    'source[src]': false,
                }
            },
            files: [{
                expand: true,
                cwd: '<%= paths.dest.base %>',
                src: ['**/*.{php,html}'],
                dest: '<%= paths.dest.base %>'
            }],
        }
    },

    html2js: {
        options: {
            htmlmin: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
            module: '<%= pkg.name %>.templates',
            singleModule: true,
        },
        template: {
            src:  '<%= paths.src.files.angular.html %>',
            dest: '<%= paths.tmp.folder.assets.js %>/template.js',
        },
    },

    jsdoc: {
        documentation: {
            src: [
                '<%= paths.src.allFiles.js %>',
                '<%= paths.src.ignore.couldBeVendor %>',
            ],
            dest: '<%= paths.tmp.folder.docs.base %>'
        }
    },

    ngdocs: {
        all: ['src/**/*.js']
    }
};