const express = require("express");
const app = express();

app.get("*", function(req, res) {
    res.status(200).json({
        message: "Hello world"
    });
});
let port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Example app listening on port: " + port);
});
