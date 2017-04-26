'use strict';
var fs = require('fs');

exports.documentationjs = {
  run: function(test) {
    var code = fs.readFileSync('test/tmp/index.html', 'utf8');
    test.ok(/gruntDocumentation/.test(code));
    test.done();
  }
};
