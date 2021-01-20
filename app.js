const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000,()=> console.log("inicio del servidor"));

const path=require("path");

app.use(express.static(path.resolve(__dirname,"public")));

app.post("/",(req,res)=> res.sendFile(path.resolve(__dirname,"views","home.html")));

app.post("/login",(req,res)=> res.sendFile(path.resolve(__dirname,"views","login.html")));

app.post("/register",(req,res)=> res.sendFile(path.resolve(__dirname,"views","register.html")));

app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname,"views","home.html")));

app.get("/login",(req,res)=> res.sendFile(path.resolve(__dirname,"views","login.html")));

app.get("/register",(req,res)=> res.sendFile(path.resolve(__dirname,"views","register.html")));
