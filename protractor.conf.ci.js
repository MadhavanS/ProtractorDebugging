/**
 * Protractor configuration to use in CI
 *
 * @example
 *     npm protractor-test-ci
 */
var specReporter         = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework        : 'jasmine2',
    allScriptsTimeout: 1200000,
    // Please see: https://github.com/SeleniumHQ/selenium/wiki/
    // Selenium Server Port. Default 4723
    seleniumPort     : 4723,
    // Absolute Path to selenium-server-standalone.jar file. If process is followed should be under [TEST_PROJECT_DIR]/node_modules/protractor/selenium/
    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    // If this is used then seleniumPort and seleniumServerJar should be commented.
    // directConnect    : true,

    // Please see: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    capabilities: {
        // android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari
        'browserName'  : 'chrome',
        // Please see: https://sites.google.com/a/chromium.org/chromedriver/
        'chromeOptions': {
            args: [
                'incognito',
                'disable-extensions'
            ]
        }
    },

    jasmineNodeOpts: {
        isVerbose             : true,
        defaultTimeoutInterval: 1200000,
        showTiming            : true,
        includeStackTrace     : true,
        realtimeFailure       : true,
        showColors            : true
    },

    // Please use _[NUMBER] due to a change in Protractor way of loading suites. Now suites are alphabetically ordered
    suites: {
        _01NAME: ['e2e/tests/debug/debugDemo.spec.js']
    },

    onPrepare: function () {
        // Set the timestamp of the report directory
        var today, timeStamp;
        today     = new Date();
        timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-'
            + today.getFullYear() + '-' + today.getHours() + 'h-'
            + today.getMinutes() + 'm';

        // Configuration of the terminal reporter
        jasmine.getEnv().addReporter(new specReporter({
            displayStacktrace  : true,
            displaySpecDuration: true,
            displaySuiteNumber : true
        }));

        // Configuration of HTML reporter
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath                     : './testReports/e2e' + timeStamp + '/',
                filePrefix                   : 'e2e',
                takeScreenshots              : true,
                takeScreenshotsOnlyOnFailures: true,
                consolidate                  : true,
                consolidateAll               : true
            })
        );

        // Set some browser properties
        browser.manage().timeouts().pageLoadTimeout(10000);
        browser.manage().timeouts().implicitlyWait(10000);

        // Set the size of the browser
        browser.driver.manage().window().setSize(1280, 720);
    },

    // Here can be stored any global parameters and their values in a MAP based format
    params: {}
};
