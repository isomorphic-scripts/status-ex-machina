
'use strict';

// This file is a custom Jest `28+` transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html
// /!\ it will replace original content of  node_modules/react-scripts/config/jest/cssTransform.js before test execution

module.exports = {
  process() {
    return { code:'module.exports = {};' };
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform';
  },
};
