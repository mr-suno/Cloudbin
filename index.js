const path = require("path");
const express = require("express");

const app = express()
const PORT = 8000


app.get("/", (req, res) => {
   res.send("loadstring(game:HttpGet('https://api.luarmor.net/files/v3/loaders/089e8f5b8ac259500a44ccd0537ab253.lua'))()")
});

app.listen(PORT, () => { console.log(`Webpage loaded on :${PORT}`) });
