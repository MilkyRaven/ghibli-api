const express = require("express");
const hbs = require("hbs")
const path = require("path")
const axios = require("axios")

const app = express();

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "hbs");

app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials")


app.get("/", async (req, res) => {
    try{
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      const films = response.data

      console.log(films)
      res.render("index", {films})
    } catch (err) {
      console.log(err)
    }
  })





app.listen(3000, () => {
    console.log("The server is running! 🐻")
  })
  