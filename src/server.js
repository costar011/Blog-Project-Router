import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node");
    // html file
});

app.get("/gh", (req, res) => {
    res.send("This Page is GH page");
    // html file
});

app.listen(3000, () => console.log("server start"));




