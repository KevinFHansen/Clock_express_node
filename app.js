import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

app.get("/clock", (req, res) => {
    res.send({ data: ["23:58"] });
});


app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port", 8080)
});