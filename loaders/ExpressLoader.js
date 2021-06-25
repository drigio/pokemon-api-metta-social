const Express = require("express");
const { pokemonRoutes } = require("../routes");

const expressApp = () => {
  const app = Express();

  app.use(Express.json());

  app.get("/api", (req, res) => {
    res.status(200).json({
      result: "SUCCESS",
      message:
        "Pokemon DB Coding Assignment for the role of Backend Developer for Metta Social. If you are seeing this, then the application is successfully up and running.",
    });
  });

  app.use("/api/pokemon/", pokemonRoutes);

  app.use((req, res, next) => {
    res.status(404).send(new Error("NOT_FOUND"));
    next();
  });

  return app;
};

module.exports = expressApp;
