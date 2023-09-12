//Q.4 Build a Server that Generate! Random Number U!ing Epre!

const express = require('express');
const app = new express();

const port = 5004;
const host = "localhost";

app.get('/',(req,res) =>{
    res.json({msg:`I am Homepage. /random for random number`});
});

app.get('/random',(req,res) => {
    const randomNumber = Math.floor(Math.random()*100);
    res.json({random : randomNumber});
});

app.listen(port,() =>{
    console.log(`Server is listening at ${host} : ${port}`)
})