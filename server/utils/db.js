const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Database connected");
  });
};
module.exports = connect;
