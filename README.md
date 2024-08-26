# Example WebdriverIO with Browserstack service

This example demonstrates the issue reported to Browserstack: 
**an error is returned when attempting to test with older _chrome_ versions on _Os X Catalina_**

## Example of error produced in logs

```sh
unhandled error in "Sanity check."before all" hook: wrappedHook for "has the correct url""
unhandled error: no such session
  (Driver info: chromedriver=2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b),platform=Mac OS X 10.15.6 x86_64) (WARNING: The server did not provide any stacktrace information)
Command duration or timeout: 8 milliseconds
Build info: version: '2.53.0', revision: '35ae25b', time: '2016-03-15 17:00:58'
System info: host: 'mac-208-52-180-231.browserstack.com', ip: '208.52.180.231', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.6', java.version: '1.8.0_51'
Driver info: org.openqa.selenium.chrome.ChromeDriver
Capabilities [{applicationCacheEnabled=false, rotatable=false, mobileEmulationEnabled=false, networkConnectionEnabled=false, chrome={chromedriverVersion=2.29.461585 (0be2cd95f834e9ee7c46bcc7cf405b483f5ae83b), userDataDir=/var/folders/3y/zz_w6_s56sl__vcrf3r5bhzr0000hr/T/.org.chromium.Chromium.Dj4ONp}, takesHeapSnapshot=true, pageLoadStrategy=normal, databaseEnabled=false, handlesAlerts=true, hasTouchScreen=false, version=57.0.2987.98, platform=MAC, browserConnectionEnabled=false, nativeEvents=true, acceptSslCerts=true, locationContextEnabled=true, webStorageEnabled=true, browserName=chrome, takesScreenshot=true, javascriptEnabled=true, cssSelectorsEnabled=true, unexpectedAlertBehaviour=}]
Session ID: 08a08d94557d75d3051563328cfdbf35
```

## To run the example

```sh
nvm install
nvm use

npm install
npm run wdio
```
