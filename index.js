const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://prueba-acciona-saul.onrender.com"],
  })
);
app.use(helmet());
let tempProfiles = [];
app.post("/addFavProfilesList", (req, res) => {
  tempProfiles.push(req.body)
  res.send({success: true,data:"Lista añadida"})
});
app.get("/getFavProfilesLists", (req, res) => {
    res.send({success: true,data:tempProfiles})
});
app.listen(process.env.PORT || 5000, () => {
  console.log("servidor en el 3000");
});
