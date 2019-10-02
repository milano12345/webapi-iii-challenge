const express = "express";
const helmet = require("helmet");
const logger = require("morgan");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);
//custom middleware

server.use(express.json());
server.use(helmet());
server.use(logger("dev"));

function logger(req, res, next) {
  console.log(`${req.method} Request`);
  next();
}

module.exports = server;
