/*
 * grunt-documentation demo
 *
 * Copyright (c) 2015 André Fiedler
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
    var path = require('path');

    // Project configuration.
    grunt.initConfig({

        documentation: {
            default: {
                files: [{
                    'expand': true,
                    'cwd': 'src',
                    'src': ['**/*.js']
                }],
                options: {
                    destination: 'docs',
                    theme: path.join(__dirname, 'documentation-theme-light'),
                    name: 'Theming Test',
                    version: '0.1.42'
                }
            },
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('../../tasks');

    // By default, run.
    grunt.registerTask('default', ['documentation']);

};
