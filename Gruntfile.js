'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    documentation: {
      default: {
        files: [
          {
            expand: true,
            cwd: 'tasks',
            src: ['**/*.js']
          }
        ],
        options: {
          destination: 'test/tmp'
        }
      }
    },
    nodeunit: {
      tasks: ['test/test.js']
    },
    clean: {
      test: ['test/tmp/**']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', [
    'clean',
    'documentation',
    'nodeunit',
    'clean'
  ]);
};
