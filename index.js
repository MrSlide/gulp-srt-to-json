var path = require('path')
var chalk = require('chalk')
var gutil = require('gulp-util')
var through = require('through2')
var parseSRT = require('parse-srt')

var PLUGIN_NAME = 'gulp-srt-to-json'

module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file)
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streams not supported!'))
      return
    }

    var validExts = ['.srt']

    if (validExts.indexOf(path.extname(file.path).toLowerCase()) === -1) {
      gutil.log(PLUGIN_NAME + ': Skipping unsupported subtitle file ' + chalk.blue(file.relative))

      callback(null, file)
      return
    }

    file.contents = new Buffer(JSON.stringify(parseSRT(file.contents.toString('utf8'))))
    file.path = file.path.substr(0, file.path.lastIndexOf('.')) + '.json'

    gutil.log(PLUGIN_NAME + ': ' + chalk.green('✔ ') + chalk.blue(file.relative))

    callback(null, file)
  })
}
