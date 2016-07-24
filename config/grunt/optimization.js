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
module.exports = {
	autoprefixer: {
		dev: {
			files: [{
				expand: true,
				cwd: '<%= paths.tmp.folder.assets.css %>',
				src: '**/*.css',
				dest: '<%= paths.tmp.folder.assets.css %>'
			}]
		}
	},

	removelogging: {
		prod: {
			src: '<%= paths.dest.allFiles.js %>'
		}
	},

	// DEACTIVATED DUE TO ISSUES
	// imagemin: {
	// 	prod: {
	// 		files: [{
	// 			expand: true,
	// 			cwd: '<%= paths.dest.folder.assets.img %>',
	// 			src: '**/*.{png,jpg,gif}',
	// 			dest: '<%= paths.dest.folder.assets.img %>',
	// 		}]
	// 	}
	// },

	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: '<%= paths.tmp.folder.assets.css %>',
				src: [
					'**/*.css',
					'!**/*.min.css'
				],
				dest: '<%= paths.dest.folder.assets.css %>',
				ext: '.min.css'
			}]
		}
	},

	uglify: {
		nonvendor: {
			files: [{
				expand: true,
				cwd: '<%= paths.tmp.folder.assets.js %>',
				src: ['*.js'],
				dest: '<%= paths.dest.folder.assets.js %>',
				ext: '.min.js'
			}]
		}
	},
};