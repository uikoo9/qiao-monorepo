module.exports = {
  '**/*': () => ['npm run build', 'npm run test', 'npm run prettier', 'npm run eslint'],
};
