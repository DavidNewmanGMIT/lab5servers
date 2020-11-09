//Server for application
//copy and pasted from https://expressjs.com/en/starter/hello-world.html

//using express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//creating roots
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
})

//new path
app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name)
    res.send('Hello ' + req.params.name);
})

//Listen to http request
app.get('/api/movies', (req, res) =>{
const mymovies =[
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];    
    //created object movies
    res.json({movies:mymovies});
});

//req = request res = response
app.get('/test', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});


//http://localhost:3000/name?fname=David&lname=Newman
app.get('/name', (req, res) =>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//http://localhost:3000/name
app.post('/name', (req, res) =>{
    //Post request sent up using body, need body parser
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

//setting up web server
//listening at port 300 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Any changes to server after being saved server has to be turned off then on again.
//little api (Application Programming Interface)