/*
 * @start Testing
 *
 * @dev
 *
 * @used plugins
 *   ** instrument  <- instrument `js` files for coverage reports
 *   ** mocha       <- runs the tests
 */
module.exports = {
	// instrument files. Needed for coverage report
	instrument: {
		files: [
			'<%= paths.src.files.js %>',
			'<%= paths.src.ignore.tests %>',
			'<%= paths.src.ignore.couldBeVendor %>'
		],
		options: {
			lazy: true,
			basePath: '<%= paths.tmp.folder.tests.instrumented %>'
		}
	},


	// unit tests with mocha
	mocha: {
		options: {
			reporter: 'Spec',
			log: true,
			logErrors: true,
			run: true,
		},
		report: {
			src: '<%= paths.tmp.folder.tests.base %>/**/*.html',
			options: {
				coverage: {
					coberturaReport: '<%= paths.reports.coverage %>',
					htmlReport: '<%= paths.reports.coverage %>'
				}
			}
		},
	},
}