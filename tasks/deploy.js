import gulp from "gulp";
var exec = require('child_process').exec;

gulp.task("deploy", ["build"], (callback) => {
    const cmd = "jaws dash";

    exec(cmd, (error, stdout, stderr) => {
        callback();
    });
});
