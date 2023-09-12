// Build a Server Using Http Module NodeJS with api endpoints for Getting Products Dat9

const http = require("http");

const port = 5000;
const host = "localhost";

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.write(`<h1>Welcome to Men and Women Dummy Data</h1>`);
        res.end();
    }
    else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader("Content-Type" , "application/json")
        res.end(JSON.stringify([{
             "id":"1",
             "name" : "Men's T-shirt",
             "Brand" : "Jockey",
             "Price" : 2000,
             "Color" : "Black",
             "Size" : "L"
        },
        {
            "id":"2",
            "name" : "Men's T-shirt",
            "Brand" : "HRX",
            "Price" : 200,
            "Color" : "Black",
            "Size" : "L" 
        },
        {
            "id":"3",
            "name" : "Men's Shoes",
            "Brand" : "Addidas",
            "Price" :  120000,
            "Color" : "Black & white",
            "Size" : "UK 10" 
        },
        {
            "id":"4",
            "name" : "Men's jeans",
            "Brand" : "Sparx",
            "Price" : 2200,
            "Color" : "Black",
            "Size" : "XL" 
        },
        {
            "id":"5",
            "name" : "Men's T-shirt",
            "Brand" : "HRX",
            "Price" : 4500,
            "Color" : "Black",
            "Size" : "L" 
        },
        {
            "id":"6",
            "name" : "Men's brief",
            "Brand" : "j&k",
            "Price" : 1205,
            "Color" : "Black",
            "Size" : "XXL" 
        },
        {
            "id":"7",
            "name" : "Men's T-shirt",
            "Brand" : "addidas",
            "Price" : 1200,
            "Color" : "Black",
            "Size" : "M" 
        },
        {
            "id":"8",
            "name" : "Men's Shirt",
            "Brand" : "HRX",
            "Price" : 800,
            "Color" : "Red",
            "Size" : "XL" 
        }]));
    }
    else if(req.url == "/women"){
        res.statusCode=200;
        res.setHeader=("content-Type","application/json");
        res.end(JSON.stringify([
            {
                "Id": "1",
                "Type": "Saree",
                "Price": 2100,
                "Color": "Black"
            },
            {
                "Id": "2",
                "Type": "Lipstick",
                "Price": 450,
                "Color": "Red",
                "Pack-of" : "8",
                "Lasting-hour" :24 
            },
            {
                "Id": "3",
                "Type": "Shoe",
                "Brand" : "Addidas",
                "Price": 12000,
                "Color": "White & Red",
                "Size": "8"
            },
            {
                "Id": "4",
                "Type": "Top",
                "Price": 1600,
                "Color": "Green",
                "Size": "L",
                "Washong" : "Machine and Hand"
            },
            {
                "Id": "5",
                "Type": "Top",
                "Price": 600,
                "Color": "Orange",
                "Size": "M"
            },
            {
                "Id": "6",
                "Type": "Jeans",
                "Price": 2800,
                "Color": "Blue",
                "Size": "34",
                "Washing" : "Machine & Hand"
            },
            {
                "Id": "7",
                "Type": "Saree",
                "Price": 5600,
                "Color": "Yellow",
                "Wearing-Type": "Party"
            },
            {
                "Id": "8",
                "Type": "Frock",
                "Price": 450,
                "Color": "Black",
                "Size": "M"
            },
            {
                "Id": "9",
                "Type": "Saree",
                "Price": 3200,
                "Color": "Blue"
            },
            {
                "Id": "10",
                "Type": "Frock",
                "Price": 800,
                "Color": "White and red",
                "Size" : "S"
            }
        ]));
    }
    else{
        res.statusCode=500;
        res.setHeader = ("Content-Type","application/json");
        res.end("Page not found!");
    }
});

server.listen(port , () => {
    console.log(`Server is running at ${host} :  ${port} `);
})