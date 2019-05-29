var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello World!");
});
let port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Example app listening on port 3000!");
});
