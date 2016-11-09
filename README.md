# gulp-srt-to-json

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![latest-release](https://img.shields.io/github/release/MrSlide/gulp-srt-to-json.svg?style=flat-square)](https://github.com/MrSlide/gulp-srt-to-json/tree/master)
[![GitHub issues](https://img.shields.io/github/issues/MrSlide/gulp-srt-to-json.svg?style=flat-square)](https://github.com/MrSlide/gulp-srt-to-json/issues)
[![license](https://img.shields.io/github/license/MrSlide/gulp-srt-to-json.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Convert SRT subtitle files into JSON format using [parseSRT](https://github.com/MrSlide/parseSRT).



## Installation

```
npm install gulp-srt-to-json
```



## Usage

```
const gulp = require('gulp');
const srtToJson = require('gulp-srt-to-json');

gulp.task('default', function () {
  gulp.src('src/subtitles/**/*.srt')
    .pipe(srtToJson())
    .pipe(gulp.dest('dist/subtitles'))
})
```



## Support

If you want to request new features or find any bugs, please open a ticket on the [issues](https://github.com/MrSlide/gulp-srt-to-json/issues) page and I'll review it as soon as possible.



## Authors and Contributors

Created by Luís Rodrigues ([@MrSlide](https://github.com/MrSlide))



## License and copyright

Released under the [MIT](https://opensource.org/licenses/MIT) license

Copyright (c) 2016 Luís Rodrigues
