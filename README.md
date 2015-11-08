# History Service

A Simple Event Analytics Ingestion Service built with [JAWS](http://jawsframework.com) for Amazon Lambda & DynamoDB.

## ES6 to ES5 Transpiling via Babel

In this project, the es6 source files are located in the `aws_modules_es6` directory. These files are transpiled to es5 in the `aws_modules` directory via `babel` and the gulp task `gulp build`.

## Tests

To run tests, just run the gulp task `gulp test` from the base directory.
