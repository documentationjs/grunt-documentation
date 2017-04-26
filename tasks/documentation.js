/*
 * grunt-documentation
 * https://github.com/documentationjs/grunt-documentation
 *
 * Copyright (c) 2015 André Fiedler
 * Licensed under the MIT license.
 */
'use strict';
var path = require('path'),
  chalk = require('chalk'),
  documentation = require('documentation'),
  formats = require('documentation').formats;

/**
 * Grunt Documentation
 *
 * In your project's Gruntfile, add a section named `documentation` to the
 * data object passed into `grunt.initConfig()`.
 *
 * @param {Object} options
 * @param {string} options.destination
 * @param {string} [options.format=html] one of `'html'`, `'md'`, `'json'`
 * @param {string} options.filename custom filename for md or json
 * @param {Array<string>} [options.access=[protected,public,undefined]  Include only
 * comments with a given access level, out of `private`, `protected`, `public`
 * and `undefined`. By default, `public`, `protected` and `undefined` access levels are included.
 * @param {Array<string>} [options.order=[]] Explicit sort order
 * @param {string} [options.theme=''] Custom theme
 * @param {string} [options.name=''] project name
 * @param {string} [options.version=''] project version
 * @example
 * grunt.initConfig({
 *   documentation: {
 *       default: {
 *           files: [{
 *               "expand": true,
 *               "cwd": "src",
 *               "src": ["**\/*.js"]
 *           }],
 *           options: {
 *               destination: "docs"
 *           }
 *       },
 *   }
 * });
 */
function gruntDocumentation(grunt) {
  grunt.registerMultiTask(
    'documentation',
    'Use Grunt with documentation to generate great documentation for your JavaScript projects.',
    function() {
      var options = this.options({
        format: 'html',
        shallow: false,
        github: false,
        access: ['public', 'protected', 'undefined'],
        order: []
      });

      var done = this.async();

      var inputs = this.files.map(function(file) {
        return file.src[0];
      });

      var formatter = formats[options.format];
      if (!formatter) {
        throw new Error(
          'invalid format given: valid options are ' +
            Object.keys(formats).join(', ')
        );
      }

      var docOptions = {
        github: options.github,
        shallow: options.shallow,
        access: options.access,
        toc: options.toc || options.order,
        theme: options.theme,
        name: options.name,
        version: options.version
      };

      documentation
        .build(inputs, docOptions)
        .then(function(comments) {
          return formatter(comments, docOptions);
        })
        .then(function(output) {
          switch (options.format) {
            case 'json':
            case 'md':
              var dest = path.join(
                process.cwd(),
                options.destination,
                options.filename || 'API.' + options.format
              );
              grunt.file.write(dest, output);
              grunt.log.writeln(
                'File ' +
                  chalk.cyan(options.filename || 'API.' + options.format) +
                  ' created.'
              );
              break;
            case 'html':
              output.forEach(function(file) {
                var dest = path.join(
                  process.cwd(),
                  options.destination,
                  file.relative
                );
                if (file.isDirectory() || grunt.file.isDir(file.path)) {
                  grunt.file.mkdir(dest);
                  grunt.verbose.writeln(
                    'Directory ' + chalk.cyan(file.relative) + ' created.'
                  );
                } else {
                  grunt.file.write(dest, file.contents);
                  grunt.verbose.writeln(
                    'File ' + chalk.cyan(file.relative) + ' created.'
                  );
                }
              });
          }
          done(true);
        })
        .catch(function(err) {
          grunt.log.error(err.toString());
          if (err.codeFrame) {
            grunt.log.error(err.codeFrame);
          }
          done(err);
        });
    }
  );
}

module.exports = gruntDocumentation;
