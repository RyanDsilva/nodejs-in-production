const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.status(200).json({ status: "Node.js up and running!" })
);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
