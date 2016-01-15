module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
      configFile: 'config.js',
      config: {
        paths: {
          "*": null,
          "src/*": "src/*",
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'promise-polyfill': "node_modules/promise-polyfill/Promise.min.js", // provides Promise for PhantomJS
          'phantomjs-polyfill':"node_modules/phantomjs-polyfill/bind-polyfill.js"
        },
        packages: {
          'test/unit': {
            defaultExtension: 'ts'
          },
          'src': {
            defaultExtension: 'ts'
          }
        },
        transpiler: 'typescript'
      },
      serveFiles: [
        'src/**/*.ts',
        'jspm_packages/**/*.js'
      ]
    },
    files: [
      'test/unit/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
        "dist/**/*.js": ["coverage"]
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
        dir: "test/coverage/",
        reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'lcov', subdir: 'report-lcov' },
            { type: 'text-summary', subdir: '.', file: 'coverage-summary.txt' },
            { type: 'text' }
        ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['Chrome'],
    browsers: ['PhantomJS2'],
    singleRun: false
  });
};
