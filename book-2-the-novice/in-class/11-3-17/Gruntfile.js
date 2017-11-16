module.exports = function(grunt) {
	// Project configuration.
	grunt.config.init({
			pkg: grunt.file.readJSON('package.json'),
			watch: {
				scripts: {
					files: ['*.js', '!node_modules/**/*.js'],
					tasks: [],
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
			}
	});

 

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	// Default task(s).
	grunt.registerTask('default', ['browserify', 'watch']);


};
