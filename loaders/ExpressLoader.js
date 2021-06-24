const Express = require("express");

const expressApp = () => {
  const app = Express();

  app.use(Express.json);

  console.log("Reached");

  app.get("/", (req, res) => {
    res.send("Hello");
  });

  app.get("/api", (req, res) => {
    res.status(200).json({
      result: "SUCCESS",
      message:
        "Pokemon DB Coding Assignment for the role of Backend Developer for Metta Social. If you are seeing this, then the application is successfully up and running.",
    });
  });

  app.use((req, res, next) => {
    res.status(404).send(new Error("NOT_FOUND"));
    next();
  });

  return app;
};

module.exports = expressApp;
