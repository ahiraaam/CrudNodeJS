let express = require("express");
let app = express();
const path = require("path");
let webRoutes = require("./routes/web");
let appConfigs = require("./configs/app");
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

//Leer inputs
let bodyParser = require("body-parser");

// sobreescribe el método POST
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", webRoutes);

const extNameHbs = "hbs";
let hbs = exphbs.create({
  extname: extNameHbs,
});

app.engine(extNameHbs, hbs.engine);
app.set("view engine", extNameHbs);

app.listen(appConfigs.express_port, function () {
  console.log("Example app listening on port " + appConfigs.express_port + "!");
});
