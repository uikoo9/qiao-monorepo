module.exports = {
  '**/*': () => ['npm run build', 'npm run prettier', 'npm run eslintfix', 'npm run test'],
};
