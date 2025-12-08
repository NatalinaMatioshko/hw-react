import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

export const js = () => {
  return app.gulp
    .src(path.src.js, { sourcemaps: true })
    .pipe(app.gulp.dest(path.build.js))
    .pipe(plugins.browserSync.stream());
};
