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
module.exports = {
	watch: {
		// watch concat files
		sass: {
			files: [
				'<%= paths.src.folder.assets.scss %>/*.scss',
				'<%= paths.src.folder.angular.base %>/**/*.scss'
			],
			tasks: ['manage:sass']
		},
		js: {
			files: '<%= paths.src.folder.assets.jss %>/*.js',
			tasks: ['concat:js']
		},
		app: {
			files: [
				'<%= paths.src.allFiles.js %>',
				'!<%= paths.src.folder.assets.js %>/**/*.js'
			],
			tasks: ['manage:app']
		},
		// todo do not watch for files scss/*.scss
		oldBrowserCss: {
			files: [
				'<%= paths.src.folder.assets.scsss %>/*.scss',
				'!<%= paths.src.folder.assets.scss %>/*.scss'
			],
			tasks: ['manageScssFolders']
		},

		// watch copy files
		copy: {
			files: [
				'<%= paths.src.base %>/**/*.html',
				'<%= paths.src.base %>/**/*.php',
			],
			tasks: ['copy:dev', 'manage:app']
		},
		vendorFolder: {
			files: '<%= paths.vendor.base %>/**/*',
			tasks: [
				'concat:js'
			]
		},
		json: {
			files: '<%= paths.src.base %>/i18n/**/*',
			tasks: 'copy:dev'
		},
		htaccess: {
			files: '<%= paths.src.base %>/.htaccess',
			tasks: 'copy:dev'
		}
	},

	connect: {
		reports: {
			options: {
				base: '<%= paths.reports.coverage %>',
				port: 8001,
				keepalive: true,
				open: true,
			}
		},
		docs: {
			options: {
				base: '<%= paths.tmp.folder.docs.base %>',
				port: 8002,
				keepalive: true,
				open: true,
			}
		},
		dev: {
			options: {
				hostname: '127.0.0.1',
				port: 1387,
				base: 'tmp',
			}
		},
		prod: {
			options: {
				hostname: '<%= connect.dev.options.hostname %>',
				port: '<%= connect.dev.options.port %>',
				base: '<%= hstn.names.dest %>',
				keepalive: true,
				open: true,
			}
		},
		ngdocs: {
			options: {
				hostname: '<%= connect.dev.options.hostname %>',
				port: '<%= connect.docs.options.port %>',
				base: '<%= paths.docs %>',
				keepalive: true,
				open: true,
			}
		}

	},

	php: {
		options: {
			hostname: '<%= connect.dev.options.hostname %>',
			port: '<%= connect.dev.options.port %>',
		},
		dev: {
			options: {
				base: 'tmp',
			}
		},
		prod: {
			options: {
				base: '<%= hstn.names.dest %>',
			}
		}
	},

	browserSync: {
		dev: {
			bsFiles: {
				src: [
					'<%= paths.tmp.base %>/**/*.html',
					'<%= paths.tmp.base %>/**/*.css',
					'<%= paths.tmp.base %>/**/*.js',
				]
			},
			options: {
				proxy: '<%= connect.dev.options.hostname %>:<%= connect.dev.options.port %>',
				port: 1397,
				open: true,
				watchTask: true,
				notify: true,
				logLevel: 'silent',
				ghostMode: {
					clicks: true,
					scroll: true,
					links:  true,
					forms:  true
				}
			}
		}
	},
};
