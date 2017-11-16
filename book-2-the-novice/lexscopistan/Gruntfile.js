module.exports = function(grunt) {
      // Project configuration.
      grunt.config.init({
          pkg: grunt.file.readJSON('package.json'),
          watch: {
              scripts: {
                files: ['scripts/*.js'],
                tasks: ['uglify', 'eslint'],
                options: {
                  spawn: false,
                },
              }
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
          eslint: {
            target: ['scripts/*.js']
        }
      });

     
  
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-eslint')
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      
  
      // Default task(s).
      grunt.registerTask('default', ['uglify', 'eslint', 'watch']);

  
  };

// module.exports = function (grunt) {
  
//    grunt.config.init({
//      eslint: {
//        all: ['**/*.js']
//      }
//    });
  
//    grunt.loadNpmTasks('eslint-grunt');
//  };