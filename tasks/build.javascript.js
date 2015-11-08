import gulp from "gulp";
import babel from "gulp-babel";

const paths = {
    source: "aws_modules_es6/**/*.js",
    destination: "aws_modules"
};

gulp.task("build-javascript", () => {
    return gulp.src(paths.source)
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest(paths.destination));
});
