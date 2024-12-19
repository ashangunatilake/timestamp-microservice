// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors()); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api", (req, res) => {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();

  res.json({ unix: unix, utc: utc });
});

app.get(
  "/api/:date",
  (req, res, next) => {
    const date = req.params.date;
    const dateObj = new Date(date);
    if (dateObj.toString() === "Invalid Date") {
      req.unix = new Date(date * 1);
      next();
    } else {
      res.json({
        unix: dateObj.valueOf(),
        utc: dateObj.toUTCString(),
      });
    }
  },
  (req, res) => {
    if (req.unix.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({
        unix: req.unix.valueOf(),
        utc: req.unix.toUTCString(),
      });
    }
  },
);

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
