const { series, watch, src, dest } = require('gulp')
const rename = require("gulp-rename")
const webpack = require("webpack-stream")

const myfiles = { 
  js: "./src/**/*.js",
  entry: "./src/main.js",

  dest: "./assets"
}

const bundle = () => {
  console.log('Bundle files')

  const entry = myfiles.entry
  const outputfile = "js/bundle.min.js"

  const w = webpack(require("./webpack.config.js"))

  return src(entry)
  .pipe(w)
  .pipe(rename(outputfile))
  .pipe(dest(myfiles.dest))
}

const watch_files = () => {
  console.log("Watching javascript files")
  watch(myfiles.js, bundle)
}

exports.bundle = bundle
exports.watch = watch_files