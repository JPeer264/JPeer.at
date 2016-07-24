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
module.exports = {
	eslint: {
		options: {
			config: 'config/eslint/.eslintrc',
		},

		// lint files in /src
		dev: {
			src: [
				'<%= paths.src.files.js %>',
				'<%= paths.src.ignore.tests %>',
				'<%= paths.src.ignore.couldBeVendor %>'
			]
		},

		// generate reports
		report: {
			options: {
				format: 'checkstyle',
				outputFile: '<%= paths.reports.checkstyle %>'
			},
			src: '<%= eslint.dev.src %>'
		}
	},

	// TODO not in use yet
	jsinspect: {
		report: {
			options: {
				reporter: 'pmd',
				reportFile: '<%= paths.reports.pmd %>'
			},
			src: [
				'<%= paths.src.allFiles.js %>',
				'<%= paths.src.ignore.tests %>'
			]
		}
	},

	csslint: {
		options: {
			csslintrc: 'config/csslint/config.json',
		},

		// lint files in /tmp and /src (src for non sass files)
		dev: {
			src: [
				'<%= paths.src.files.css %>',
				'<%= paths.tmp.files.css %>',
			]
		},

		// generate reports
		report: {
			options: {
				formatters: [{
					id: 'lint-xml',
					dest: '<%= paths.reports.base %>/csslint.xml'
				}]
			},
			src: '<%= csslint.dev.src %>'
		}
	},

	validation: {
		options: {
			failHard: true,
			stoponerror: false,
			reset: true,
			serverUrl: 'http://validator.test.dmc.de/check',
			path: '<%= paths.reports.html %>',
			reportpath: '<%=paths.reports.html2 %>',
			// proxy: 'http://proxy.intra.dmc.de:3128',
			relaxerror: [
				// TODO: resolve
				'Any button descendant of a label element with a for attribute must have an ID value that matches that for attribute.',

				// relax custom elements
				'Element [-a-zA-Z]+ not allowed as child of element [-a-zA-Z]+ in this context',

				// informational statements from validator
				'The Content-Type was text/html. Using the HTML parser.',
				'Using the schema for HTML with SVG 1.1, MathML 3.0, RDFa 1.1, and ITS 2.0 support.'
			],
		},
		// todo angular path
		angular: {
			options: {
				wrapfile: './config/validation/html5-wrapper.html'
			},
			src: '<%= paths.src.files.angular.html %>'
		},
		noapp: {
			options: {
				wrapfile: false
			},
			src: [
				'<%= paths.src.allFiles.html %>',
				'<%= paths.src.ignore.appHtml %>'
			]
		}
	},
}