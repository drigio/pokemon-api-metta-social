const initServer = require("./loaders");
const { SERVER_PORT } = require("./config");

const startServer = async () => {
  try {
    const { server } = await initServer();
    server.listen(
      parseInt(SERVER_PORT),
      console.log(`Server started on port ${SERVER_PORT} successfully.`)
    );
  } catch (e) {
    console.log(`Couldn't start server. Error : ${e.message}`);
  }
};

startServer();
