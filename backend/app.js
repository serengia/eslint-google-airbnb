const express = require("express");
const userRouter = require("./router/userRouter");

const lodash = require("lodash");

const app = express();

app.use("/api/v1/users", userRouter);

const userName = "My Name";

console.log("Just testing");
console.log(usersName);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
