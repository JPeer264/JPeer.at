var jitMappings = {
	removelogging: 'grunt-remove-logging',
	validation: 'grunt-html-validation',
	mocha: 'grunt-mocha-phantom-istanbul',
	json2js: 'grunt-angular-json2js',
	instrument: 'grunt-istanbul',
	scsslint: 'grunt-scss-lint',
};

module.exports = function(grunt) {
	// see how long each task need
	require('time-grunt')(grunt);

	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;

		glob.sync('*', {cwd: path}).forEach(function(option) {
			// key = option.replace(/\.js$/,'');
			object = grunt.util._.extend(object, require(path + option));
		});

		return object;
	}

	grunt.initConfig({
		// paths for easier maintenance
		pkg: grunt.file.readJSON('package.json'),
		hstn: grunt.file.readJSON('hasten.json'),
		paths: {
			base: '.',
			cache: {
				scss:   '<%= paths.base %>/.scss-cache',
			},
			docs: '<%= paths.base %>/docs',
			tmp: {
                base: '<%= paths.base       %>/tmp',
                folder: {
                	assets: {
                		base: '<%=   paths.tmp.base %>/<%= hstn.names.assets %>',
						js: '<%=     paths.tmp.folder.assets.base %>/js',
						jss:'<%=     paths.tmp.folder.assets.js %>/**',
						css: '<%=    paths.tmp.folder.assets.base %>/css',
						csss: '<%=   paths.tmp.folder.assets.css %>/**',
						styles: '<%= paths.tmp.folder.assets.css %>/global.css',
                	},
                	tests: {
                		base: '<%= paths.tmp.base %>/tests',
						js: '<%=   paths.tmp.folder.tests.base   %>/js',
						instrumented: '<%=   paths.tmp.folder.tests.base   %>/instrumented',
						css: '<%=  paths.tmp.folder.tests.base   %>/css',
                	},
                	docs: {
                		base: '<%= paths.tmp.base %>/docs',
                	}
                },
                files: {
                	css: '<%= paths.tmp.folder.assets.csss %>/*.css',
					instrumented: [
						'<%=   paths.tmp.folder.tests.instrumented   %>/**/*.module.js',
						'<%=   paths.tmp.folder.tests.instrumented   %>/**/*.directive.js',
						'<%=   paths.tmp.folder.tests.instrumented   %>/**/*.controller.js',
						'<%=   paths.tmp.folder.tests.instrumented   %>/**/*.js',
					]
                }
            }, // tmp
            vendor: {
            	base: '<%= paths.base %>/vendor',
            	css: [
            		'<%= paths.vendor.base %>/**/*.css'
            	],
            	js: [
            		'<%= paths.vendor.base %>/**/*.js',
            	],
            	min: {
            		js: '<%= paths.vendor.base %>/**/*.min.js',
            		css: '<%= paths.vendor.base %>/**/*.min.css',
            	}
            }, // vendor
			src: {
				base: '<%=  paths.base      %>/<%= hstn.names.src %>',
				tests: '<%= paths.src.base  %>/**/*.spec.js',
				folder: {
					assets: {
						base: '<%=  paths.src.base 				 %>/<%= hstn.names.assets %>',
						js: '<%=    paths.src.folder.assets.base %>/js',
						jss: '<%=   paths.src.folder.assets.js   %>/**',
						scss: '<%=  paths.src.folder.assets.base %>/scss',
						scsss: '<%= paths.src.folder.assets.scss %>/**',
						css: '<%=   paths.src.folder.assets.base %>/css',
						csss: '<%=  paths.src.folder.assets.css  %>/**',
						img: '<%=   paths.src.folder.assets.base %>/img',
						imgs: '<%=  paths.src.folder.assets.img  %>/**',
						svg: '<%=   paths.src.folder.assets.base %>/svg',
						svgs: '<%=  paths.src.folder.assets.svg  %>/**',
						json: '<%=  paths.src.folder.assets.base %>/json',
						jsons: '<%= paths.src.folder.assets.json %>/**',
					}, // assets
					angular: {
						base: '<%= paths.src.base %>',
					} // angular
				}, // folder
				ignore: {
					modules: [
						'!<%= paths.src.base %>/**/node_modules/**/*.js',
						'!<%= paths.src.base %>/**/node_modules/**/*.css',
						'!<%= paths.src.base %>/**/node_modules/**/*.html',
					],
					tests: [
						'!<%= paths.src.tests %>'
					],
					_js: [
						'!<%=   paths.src.base   %>/**/_*.js',
					],
					couldBeVendor: [
						// start with js
						'!<%= paths.src.base %>/**/*.min.js',
						'!<%= paths.src.base %>/**/*jquery*.js',
						'!<%= paths.src.base %>/**/*angular*.js',
						'!<%= paths.src.base %>/**/*bootstrap*.js',

						// end with css
						'!<%= paths.src.base %>/**/*.min.css',
						'!<%= paths.src.base %>/**/*bootstrap*.css',
					],
					_scss: '!<%= paths.src.base %>/**/_*.scss',
					_css:  '!<%= paths.src.base %>/**/_*.css',
					_html: '!<%= paths.src.base %>/**/_*.html',
					assets: [
						'!<%= paths.src.files.assets.js',
						'!<%= paths.src.files.assets.css',
						'!<%= paths.src.files.assets.scss',
						'!<%= paths.src.files.assets.img',
						'!<%= paths.src.files.assets.svg',
						'!<%= paths.src.files.assets.json',
					],
					appHtml: [
						'!<%= paths.src.files.angular.html %>'
					],
					angular: [
						'!<%= paths.src.files.angular.all %>'
					],
					min: [
						'!<%= paths.src.base %>/**/*.min.*'
					]
				}, // ignore
				allFiles: {
					js: '<%=   paths.src.base %>/**/*.js',
					scss: '<%= paths.src.base %>/**/*.scss',
					css: '<%=  paths.src.base %>/**/*.css',
					html: '<%= paths.src.base %>/**/*.html',
					img: '<%=  paths.src.base %>/**/*.img',
					svg: '<%=  paths.src.base %>/**/*.svg',
					json: '<%= paths.src.base %>/**/*.json',
				}, // allfiles
				files: {
					js: [
						'<%= paths.src.allFiles.js %>',
						'<%= paths.src.ignore._js %>'
					],
					scss: [
						'<%= paths.src.allFiles.scss %>',
						'<%= paths.src.ignore._scss %>',
					],
					css: [
						'<%= paths.src.allFiles.css %>',
						'<%= paths.src.ignore._css %>'
					],
					html: [
						'<%= paths.src.allFiles.html %>',
						'<%= paths.src.ignore._scss %>'
					],
					assets: {
						js: [
							'<%= paths.src.folder.assets.jss %>/*.class.js',
							'<%= paths.src.folder.assets.jss %>/*.js',
							'<%= paths.src.ignore._js %>',
						],
						scss: [
							'<%= paths.src.folder.assets.scss %>/*.scss',
							'<%= paths.src.ignore._scss %>',
							'<%= paths.src.folder.assets.css %>/*.css',
							'<%= paths.src.ignore._css %>',
						],
						oldBrowserScss: [
							'<%= pahts.src.folder.assets.scss %>/**/*.scss',
							'!<%= pahts.src.folder.assets.scss %>/*.scss',
						],
						img: '<%=  paths.src.folder.assets.imgs %>/*.img',
						svg: '<%=  paths.src.folder.assets.svgs %>/*.svg',
						json: '<%= paths.src.folder.assets.jsons %>/*.json',
					}, // assets
					angular: {
						modules: '<%= paths.src.folder.angular.base %>/**/*.module.js',
						directives: [
							'<%= paths.src.folder.angular.base %>/**/*.directive.js',
							'<%= paths.src.folder.angular.base %>/**/*.dir.js'
						],
						services: [
							'<%= paths.src.folder.angular.base %>/**/*.factory.js',
							'<%= paths.src.folder.angular.base %>/**/*.provider.js',
							'<%= paths.src.folder.angular.base %>/**/*.service.js'
						],
						controller: [
							'<%= paths.src.folder.angular.base %>/**/*Ctrl.js',
							'<%= paths.src.folder.angular.base %>/**/*Controller.js',
							'<%= paths.src.folder.angular.base %>/**/*.ctrl.js',
							'<%= paths.src.folder.angular.base %>/**/*.controller.js'
						],
						all: [
							'<%= paths.src.files.angular.modules %>',
							'<%= paths.src.files.angular.directives %>',
							'<%= paths.src.files.angular.services %>',
							'<%= paths.src.files.angular.controller %>',
						],
						html: '<%= paths.src.folder.angular.base %>/**/*.html'
					}, // angular
					couldBeVendor: {
						js: [
							// start with js
							'<%= paths.src.base %>/**/*.min.js',
							'<%= paths.src.base %>/**/*jquery*.js',
							'<%= paths.src.base %>/**/*angular*.js',
							'<%= paths.src.base %>/**/*bootstrap*.js',
						],
						css: [
							// end with css
							'<%= paths.src.base %>/**/*.min.css',
							'<%= paths.src.base %>/**/*bootstrap*.css',
						]
					}, // couldBeVendor
				} // files
			}, // src
			dest: {
				base: '<%=  paths.base %>/<%= hstn.names.dest %>',
				folder: {
					html: '<%= paths.dest.base %>/html',
					htmls: '<%= paths.dest.folder.html %>/**',
					assets: {
						base: '<%= paths.dest.base %>/<%= hstn.names.assets %>',
						js: '<%=    paths.dest.folder.assets.base %>/js',
						jss: '<%=   paths.dest.folder.assets.base %>/**',
						css: '<%=   paths.dest.folder.assets.base %>/css',
						csss: '<%=  paths.dest.folder.assets.base %>/**',
						html: '<%=  paths.dest.folder.assets.base %>/html',
						htmls: '<%= paths.dest.folder.assets.base %>/**',
						img: '<%=   paths.dest.folder.assets.base %>/img',
						imgs: '<%=  paths.dest.folder.assets.base %>/**',
						svg: '<%=   paths.dest.folder.assets.base %>/svg',
						svgs: '<%=  paths.dest.folder.assets.base %>/**',
						json: '<%=  paths.dest.folder.assets.base %>/json',
						jsons: '<%= paths.dest.folder.assets.base %>/**',
					}
				},
				allFiles: {
					js: '<%=     paths.dest.folder.assets.jss   %>/*.js',
					css: '<%=    paths.dest.folder.assets.csss  %>/*.css',
					mincss: '<%= paths.dest.folder.assets.csss  %>/*.min.css',
					html: '<%=   paths.dest.folder.assets.htmls %>/*.html',
					img:  '<%=   paths.dest.folder.assets.imgs  %>/*.img',
					svg:  '<%=   paths.dest.folder.assets.svgs  %>/*.svg',
					json: '<%=   paths.dest.folder.assets.jsons %>/*.json',
				} // files
			}, // dest
			reports: {
				base:     '<%= paths.tmp.base     %>/reports',
				coverage: '<%= paths.reports.base %>/coverage',
				checkstyle: '<%= paths.reports.base %>/checkstyle.xml',
				pmd: '<%=        paths.reports.base %>/pmd.xml',
				html: '<%= paths.reports.base %>/.html-status.json',
				html2: '<%= paths.reports.base %>/app.json',
				csslint:  '',
				js:   '',
			}, // reports
			config: '<%= paths.base %>/config',
		}, // paths
/*
 * Paths END
 */


/*
 * @start Code checking
 *
 * @dev
 *
 * @used plugins
 *   ** eslint
 *   ** jsinspector
 *   ** csslint
 **  ** html-validation
 */

// see ./config/grunt/lint.js


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
 *   ** html2js  <- 4 angularJS. Make own module for all component
 *   ** jsdoc    <- generates documentation for js-Files
 */

// see ./config/grunt/management.js


/*
 * @start Filesize reducing, optimization and remove junk
 *
 * @prod
 *
 * @used plugins
 *   ** autoprefixer   <- add prefixes for every browser
 *   ** removelogging  <- remove `console.*` in all js files
 *   ** imagemin       <- reduces file size of `img` files
 *   ** cssmin         <- minification of `.css` to `.min.css`
 *   ** uglify         <- minification of `.js` to `.min.js`
 */


// see ./config/grunt/optimization.js


/*
 * @start Testing
 *
 * @dev
 *
 * @used plugins
 *   ** instrument  <- instrument `js` files for coverage reports
 *   ** mocha       <- runs the tests
 */

// see ./config/grunt/tests.js


/*
 * @start Development Helpers
 *
 * @dev
 *
 * @used plugins
 *   ** watch       <- watches tasks for development
 *   ** connect     <- make a HTTP server for developing or test results
 *   ** php         <- make a PHP  server for developing or test results
 *   ** browserSync <- updating server after changing files
 */

// see ./config/grunt/helpers.js

	}); // grunt.initConfig END

// merge tasks in config folder with this grunt file
// all options in the subdirectory are now available
grunt.config.merge(loadConfig('./config/grunt/'));

/*
 * @start tasks
 *
 * * helpers
 *   ** default
 *   ** force:on
 *   ** force:off
 *   ** manageScssFolder
 *
 * * manage
 *   ** manage
 *   ** manage:js
 *   ** manage:sass
 *
 * * minify
 *   ** minify
 *   ** minify:js
 *   ** minify:app
 *   ** minify:css
 *
 * * lint
 *   ** lint:dev
 *   ** lint:reports
 *   ** lint:ci
 *
 * * tests
 *   ** test:dev
 *   ** test:reports
 *   ** test:ci
 *
 * * reports
 *   ** reports
 *
 * * build
 *   ** build:prod
 *   ** build:dev
 */

	/*
	 * @tasks helpers
	 * :on, :off
	 *
	 * enable the force during another tasks
	 */
	grunt.registerTask('force:on',
		'force the force option on if needed',
		function() {
			if ( !grunt.option( 'force' ) ) {
				grunt.config.set('usetheforce_set', true);
				grunt.option( 'force', true );
			}
		}
	);

	grunt.registerTask('force:off',
		'turn force option off if we have previously set it',
		function() {
			if ( grunt.config.get('usetheforce_set') ) {
				grunt.option( 'force', false );
			}
		}
	);

	grunt.registerTask('default', [
		'build:prod'
	]);

	/**
	 * Concat every scss file in a subdirectory of src/assets/scss/
	 * every folder in scss becomes a own css file. E.g. scss/ie8/* -> css/ie8.css
	 */
	grunt.registerTask('manageScssFolders', "Finds and prepares scss files into .tmp/css folder for concatenation.", function() {
		var hstnNames = grunt.file.readJSON('hasten.json').names;

		// get all module directories
		grunt.file.expand('./' + hstnNames.src + '/' + hstnNames.assets + '/scss/*').forEach(function (dir) {
			var dirName;

			// delete if no indexOf browser.
			if (dir.indexOf('browser.') === -1) {
				dir = '';
			}

			dirName = dir.substr(dir.lastIndexOf('.')+1);

			// get the current concat object from initConfig
			var sass   = grunt.config.get('sass')   || {};
			var concat = grunt.config.get('concat') || {};
			var clean  = grunt.config.get('clean')  || {};

			// create a subtask for each module, find all src files
			// and combine into a single js file per module
			if (dir !== '') {
				// all necessary scss files are now in .sass-cache/assets/scss/DIR/*.scss
				console.log(dirName);
				concat[dirName] = {
					src:  [
						dir + '/**/*.scss',
						'!' + dir + '/**/_*.scss',
					],
					dest: dir + '/'+ dirName + '.GruntGenerated.scss'
				};

				sass[dirName] = {
					src:  dir + '/' + dirName + '.GruntGenerated.scss',
					dest: '<%= paths.tmp.folder.assets.css %>/' + dirName + '.css'
				};

				clean[dirName] = {
					src: dir + '/' + dirName + '.GruntGenerated.scss'
				};

				// add module subtasks to the concat task in initConfig
				grunt.config.set('concat', concat);
				grunt.config.set('sass', sass);
				grunt.config.set('clean', clean);

				// run all task which are generated before
				grunt.task.run('concat:' + dirName,'sass:' + dirName, 'clean:' + dirName);
			}
		});
	});

	require('et-grunt')(grunt, {
		/**
		 * @tasks manage files for develop
		 * -, :sass, :js
		 */
		manage: {
			default: [
				'manage:sass',
				'manage:js',
				'manage:app',
			],
			sass: [
				'concat:scss',
				'sass:dev',
				'concat:css',
				'clean:createdSassByGrunt',
				'manageScssFolders',
				'autoprefixer'
			],
			js: [
				'concat:js',

				// concat vendor
				'bower_concat',
				'concat:vendor',
				'clean:bower'
			],
			app: [
				// concat app
				'html2js:template',
				'concat:app',
				'clean:template',
			],
		},

		/*
		 * @tasks minify
		 * -, :sass, :js
		 */
		//todo minify:oldbrowsers for manageScssFolders -> make own watch task
		minify: {
			default: [
				'minify:css',
				'minify:js',
			],
			css: [
				'manage:sass',
				'cssmin'
			],
			js: [
				'manage:js',
				'removelogging',
				'uglify:nonvendor',
			]
		},

		/*
		 * @tasks lint
		 * -, :dev, :ci, :reports
		 */
		lint: {
			default: ['lint:ci'],
			dev: [
				'lint:ci'
			],
			ci: [
				'manage',
				'eslint:dev',
				'csslint:dev',
				'validation'
			],
			reports: [
				'force:on',
				'manage',
				'eslint:report',
				'csslint:report',
				// 'validation', add validation for angular and non angular apps
				'force:off'
			]
		},

		/*
		 * @tasks test
		 * -, :dev, :reports, :ci
		 */
		test: {
			default: ['test:ci'],
			dev: [
				'test:ci',
				'connect:reports'
			],
			ci: [
				'clean:tests',
				'copy:tests',
				'bower_concat',
				'html2js',
				'instrument',
				'concat:tests',
				'mocha:report'
			],
			reports: [
				'force:on',
				'test:ci',
				'force:off'
			]
		},

		/*
		 * @tasks reports
		 *
		 * this task should never fail
		 */
		reports: [
			'lint:reports',
			'test:reports'
		],

		/*
		 * @tasks build
		 * :prod, :dev, :ci
		 */
		build: {
			default: ['build:prod'],
			prod: [
				'build:dev',
				'minify',
				// 'lint:dev',
				'copy:prod',
				// 'imagemin:prod', // <- deactivated due to issues
				'cdnify:prod'
			],
			dev: [
				'manage',
				'copy:dev'
			],
			ci: ['build:prod']
		},

		/*
		 * @tasks serve
		 * -, :dev, :prod
		 */
		serve: {
			default: ['serve:dev'],
			dev: [
				'build:dev',
				'connect:dev',
				'browserSync:dev',
				'watch',
			],
			prod: [
				'build:prod',
				'connect:prod',
			],
			devphp: [
				'build:dev',
				'php:dev',
				'browserSync:dev',
				'watch',
			],
			reports: [
				'test:ci',
				'connect:reports'
			],
			docs: [
				'clean:docs',
				'ngdocs',
				'connect:ngdocs'
			]
		}
	}, jitMappings);
}
