import gulp from "gulp";
import del from "del";

const paths = [
    "aws_modules/*"
];

gulp.task("clean", () => {
    return del(paths);
});
