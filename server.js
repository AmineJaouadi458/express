const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.set("view engine", "ejs");
function workingHours(req, res, next) {
    let now = new Date();
    let day = now.getDay()
    let hour = now.getHours()
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 18) {
        next()
    } else {
        res.send("Currently unvailable : Monday to Friday, 9am to 6pm")
  }
}
app.use(workingHours);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running on port 5000");
});
