module.exports = function(grunt) {
	// Project configuration.
	grunt.config.init({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['*.js', '!node_modules/**/*.js'],
				tasks: ['eslint'],
				options: {
					spawn: false,
				},
			}
		},
		browserify: {
			dist: {
				files: {
					'build/bundle.js': ['main.js']
				}
			}
		},
		eslint: {
			target: ['scripts/*.js']
		},
		uglify: {
			options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
					files: [{
							expand: true,
							cwd: 'scripts',
							src: '*.js',
							dest: 'build',
							ext: '.min.js'
					}]
			}
	},
	});

 

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	
	

	// Default task(s).
	grunt.registerTask('default', ['browserify', 'uglify', 'eslint', 'watch']);


};
