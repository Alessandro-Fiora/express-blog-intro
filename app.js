const express = require("express");
const app = express();
const port = 3000;

// Lista dei post
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

// Asset statici
app.use(express.static("public"));

// Rotta Homepage
app.get("/", (req, res) => {
  console.log("homepage request received");
  res.send("Server del mio Blog");
});

// Rotta Bacheca
app.get("/bacheca", (req, res) => {
  console.log("dashboard request received");
  res.json({
    posts,
    postNumber: posts.length,
  });
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
