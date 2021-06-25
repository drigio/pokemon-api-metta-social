const { connect } = require("mongoose");
const { MONGO_URL } = require("../config");

const getDBConnection = async () => {
    const { connection } = await connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    return connection;
}

module.exports = getDBConnection;