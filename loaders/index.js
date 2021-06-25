const expressApp = require("./ExpressLoader");
const mongoConnection = require("./MongooseLoader");
const { loadSeedData } = require("../seed");

const initServer = async () => {
  const connection = await mongoConnection();
  const server = expressApp();
  await loadSeedData(connection);
  return { server };
};

module.exports = initServer;
