const expressApp = require("./ExpressLoader");

const initServer = async () => {
  const server = expressApp();

  return { server };
};

module.exports = initServer;
