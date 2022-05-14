const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connect = require("./utils/db");
const userRouter = require("./resources/users/user.routes");
const { register, login } = require("./utils/auth");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.end("Hey Welcome to MakArtworks");
});

app.use("/v1/users/register/", register);
app.use("/v1/users/login/", login);
app.use("/v1/users", userRouter);

const start = async () => {
  connect();
  await app.listen(PORT, () => {
    console.log(`server is listening from http://localhost:${PORT}`);
  });
};

module.exports = start;
