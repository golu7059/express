//Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express

const express = require("express");
const app = new express();

const port = 5000;
const host = "Localhost";

app.get('/',(req,res) => {
    res.json({'Counter': 200});
});
app.get('/increment',(req,res) => {
    res.json({'Counter': 201});
});
app.get('/decrement',(req,res) => {
    res.json({'Counter': 199});
});

app.listen(port,() =>{
    console.log(`Server is running at ${host} : ${port}`);
});