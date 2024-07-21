const path = require("path");
const express = require("express");

const app = express()
const PORT = 8000


app.get("/", (req, res) => {
   res.send("loadstring(game:HttpGet('https://github.com/mr-suno/Starry/releases/latest/download/main.lua'))()")
});

// app.post("/", (req, res) => {
//    res.send("loadstring(game:HttpGet('https://github.com/mr-suno/Starry/releases/latest/download/main.lua'))()")
// });


app.listen(PORT, () => { console.log(`Webpage loaded on :${PORT}`) });
