// Karma configuration
// Generated on Sun Jul 13 2014 09:06:13 GMT-0400 (EDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon'],

        // list of files / patterns to load in the browser
        files: [
            './bower_components/bindPolyfill.js',
            './node_modules/ng-midway-tester/src/ngMidwayTester.js',
            './bower_components/angular/angular.js',
            "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "./bower_components/angular-mocks/angular-mocks.js",
            "./app/app.js",
            "./app/core/core-module.js",
            "./app/common/user-factory.js",
            "./app/common/credito-factory.js",
            "./app/common/date-filter.js",
            "./app/home/home.js",
            "./app/harbour/harbour.js",
            "./app/shelter/shelter.js",
            "./app/**/*spec.js"
        ],

        // list of files to exclude
        exclude: [
            // Excluding midway tests for now; comment this line out when you want to run them
            './src/client/test/midway/**/*.spec.js',
            './src/client/app/**/*spaghetti.js'
        ],

        proxies: {
            '/': 'http://localhost:8888/'
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/client/app/**/*.js': 'coverage'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
