const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.text());  // To parse the text format in the request body

// To check if the server is running
routes.get('/', (req, res) => {
    res.send({status: 200});
});

// Handling the HTTP request 
routes.get('/isPyramid', (req, res) => {

    try {
        const body = req.body; 
        const dict = {};

        // Mapping the occurance of each letter into a dictionary
        for(let s of body) {
            if(!dict[s]) dict[s] = 1;
            else dict[s] = dict[s] + 1;
        }
    
        // Constructing a list with the frequency count
        let items = Object.keys(dict).map( (key) => dict[key]);
        items.sort();

        // Checking if the word is pyramid or not
        for(let i=0;i<items.length-1;i++) {
            if((items[i+1] - items[i]) !== 1) {
                return res.status(200).send(`The word ${body} is not a PYRAMID word`);
            }
        }
        return res.status(200).send(`The word ${body} is a PYRAMID word`);
    } 
    
    // Error handler if the request body is empty
    catch {
       return res.send("Please enter a word while sending the HTTP request");
    }
});


module.exports = routes;