const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("request recieved");
  res.send("Homepage");
});
app.listen(port, () => {
  console.log("server listening on port", port);
});
