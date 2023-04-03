module.exports = {
  files: ['!__tests__/**/*', '__tests__/ava/**/*'],
  match: [],
  failFast: true,
  failWithoutAssertions: false,
  environmentVariables: {
    MY_ENVIRONMENT_VARIABLE: 'some value',
  },
  verbose: true,
  require: [],
  nodeArguments: ['--trace-deprecation'],
};
