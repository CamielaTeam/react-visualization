var express = require("express");
var app = express();
var multer = require("multer");
var cors = require("cors");
const createMatrix = require("./main").generateMatrix;
const resetVariables = require("./main").resetVariables;
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "archivos_entrada");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }).array("file");

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).json(err);
    } else if (err) {
      console.log(err);

      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get("/getGraph", function (req, res) {
  var dataForGraph = createMatrix();
  resetVariables();
  res.json({
    dataForGraph,
  });
});

app.listen(8000, function () {
  console.log("App running on port 8000");
});
