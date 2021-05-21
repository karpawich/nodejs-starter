const { config } = require('dotenv');

/**
 * A secure config system that exposes secrets, keys, and more
 * via a simple JSON object that can be imported from other modules.
 */

if (process.env.NODE_ENV !== 'production') {
  config();
}

module.exports = {
  api: {
    port: process.env.PORT || 3000,
  },
  db: {
    name: process.env.DB_NAME || 'TODO',
    url: process.env.DB_URL || 'mongodb://localhost:27017/TODO',
  },
};
