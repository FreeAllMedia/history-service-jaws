import gulp from "gulp";
const exec = require("child_process").exec;

gulp.task("deploy", ["build"], (callback) => {
    const cmd = "jaws dash";

    exec(cmd, (error) => {
        if (error) { throw error; }
        callback();
    });
});
