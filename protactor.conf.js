exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["./scenario/*.js", "./scenario/**/*.js"],
  capabilities: {
    browserName: 'chrome'
  },
  //allScriptsTimeout: timeout_in_millis,
    
}