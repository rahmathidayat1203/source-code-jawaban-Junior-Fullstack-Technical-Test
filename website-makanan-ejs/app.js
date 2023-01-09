const express = require("express");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`listengin in [::]:${port}`);
});
