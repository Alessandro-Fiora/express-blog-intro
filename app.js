const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    title: "Ciambellone",
    content: "lorem ipsum sit amet",
    img: "./public/images/ciambellone.jpeg",
    tags: ["ricetta", "ciambellone"],
  },

  {
    title: "Crackers alla barbabietola",
    content: "lorem ipsum sit amet",
    img: "./public/images/cracker_barbabietola.jpeg",
    tags: ["ricetta", "cracker", "barbabietola"],
  },

  {
    title: "Pane fritto dolce",
    content: "lorem ipsum sit amet",
    img: "./public/images/pane_fritto_dolce.jpeg",
    tags: ["ricetta", "pane", "fritto", "dolce"],
  },

  {
    title: "Pasta alla barbabietola",
    content: "lorem ipsum sit amet",
    img: "./public/images/pasta_barbabietola.jpeg",
    tags: ["ricetta", "pasta", "alla", "barbabietola"],
  },

  {
    title: "Torta paesana",
    content: "lorem ipsum sit amet",
    img: "./public/images/torta_paesana.jpeg",
    tags: ["ricetta", "torta", "paesana"],
  },
];

app.get("/", (req, res) => {
  console.log("request recieved");
  res.send("Server del mio Blog");
});
app.listen(port, () => {
  console.log("server listening on port", port);
});
