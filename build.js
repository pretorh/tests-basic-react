const browserify = require('browserify');

const b = browserify('dist/index.js');
b.transform('browserify-css');

if (process.env.NODE_ENV === 'production') {
  b.transform('browserify-shim');
  b.transform('envify');
  b.transform('uglifyify');
}

b.bundle().pipe(process.stdout);
