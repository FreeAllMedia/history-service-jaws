import gulp from "gulp";

import mocha from "gulp-mocha";

const paths = "aws_modules_es6/**/*.spec.js";

gulp.task("test", ["build"], () => {
    return gulp.src(paths, { read: false })
        .pipe(mocha({ reporter: "spec" }));
});
