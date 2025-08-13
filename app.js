const express = require("express");
const app = express();
const bodyP = require("body-parser");
const feedRoute = require("./routes/feed.route");
const cors = require("./middlewares/Cors.middleware");
const handleError = require("./middlewares/ErroHandle.middleware");
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(bodyP.json());
app.use(bodyP.urlencoded({ extended: true }));

app.use(cors);

app.use("/", feedRoute);

app.use(handleError);

app.listen(3030, () => {
  console.log("server running on http://localhost:3030");
});
