const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 2022;
const path = require("path");
var exphbs = require("express-handlebars");
const logger = require("./middleware/logger");

// innit malware............
//app.use(logger);

//HandleBars Middleware............................

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: "views/", // directory to handlebars files
    defaultLayout: null,
    extname: "handlebars",
  })
);

app.set("view engine", "handlebars");
app.set("views", "views");

//Body Parser MiddleWare.............
app.use(express.json());
app.use(urlencoded({ extended: false }));
// hard coded json object...............

//Homepage route..........................
app.get("/", (req, res) => res.render("index"));

// set static folder..............
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(port, console.log(`server started at port ${port}`));
