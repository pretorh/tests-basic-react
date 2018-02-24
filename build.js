const browserify = require('browserify');

const b = browserify('dist/index.js');

if (process.env.NODE_ENV === 'production') {
  b.transform('browserify-css', {
    minify: true,
    output: 'dist/bundle.css'
  });
  b.transform('browserify-shim');
  b.transform('envify');
  b.transform('uglifyify');
} else {
  b.transform('browserify-css');
}

b.bundle().pipe(process.stdout);
