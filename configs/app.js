const dotenv = require("dotenv");

dotenv.config();

const appConfig = {
  env: process.env.NODE_ENV,
  express_port: process.env.EXPRESS_PORT,
};

module.exports = appConfig;
