# Running e2e Tests

## Install requirements using the following commands:
change dir to _'/ProtractorDebugging/'_

- `npm install`
- `npm run protractor-setup`

## Run the tests
change dir to _'/ProtractorDebugging/'_

- open Terminal and run the following command:
- `npm run protractor-test-ci`
 - "If you receive a Selenium Server JAR not found please update protractor.conf.ci.js 'seleniumServerJar' to the new version of selenium server from node_modules/protractor/selenium"
- go to _test/e2e_reports/[dateTimeOfTestRun]/*_ (HTML test reports are saved at this location)

## Debug the tests
change dir to _'/ProtractorDebugging/'_

### Prerequisites:
- Webstorm
- NodeJS 6.x.x
- ProtractorJS

### Steps:
- Within Webstorm create a new Run/Debug Run Configuration

![image](https://github.com/popescunsergiu/ProtractorDebugging/blob/master/assets/Webstorm01.png) ![image](https://github.com/popescunsergiu/ProtractorDebugging/blob/master/assets/Webstorm02.png)

- Edit the following fields of the Run/Debug Run Configuration:
 - “Node interpreter”: absolute path to local installation of NodeJs
 - “Working directory”: absolute path to Project directory
 - “Javascript file”: relative path to protractor cli.js file
 - “Application parameter”: relative path to protractor configuration file

![image](https://github.com/popescunsergiu/ProtractorDebugging/blob/master/assets/Webstorm03.png)

### Debug:
To debug your tests simply place breakpoints in any place needed within the code and use the above created Configuration to debug.

![image](https://github.com/popescunsergiu/ProtractorDebugging/blob/master/assets/WebStormDebug01.gif)
![image](https://github.com/popescunsergiu/ProtractorDebugging/blob/master/assets/WebStormDebug02.gif)

