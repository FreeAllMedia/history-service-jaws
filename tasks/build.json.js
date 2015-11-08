import gulp from "gulp";

const paths = {
    source: "aws_modules_es6/**/*.json",
    destination: "aws_modules"
}

gulp.task("build-json", () => {
    return gulp.src(paths.source)
        .pipe(gulp.dest(paths.destination));
});
