require("dotenv").config();

module.exports = {
  SERVER_PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL
};
