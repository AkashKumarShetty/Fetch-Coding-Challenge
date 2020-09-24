const express = require('express');
const cors = require('cors');

const PORT = 8000;  // Setting the default port to 8000

const app = express();
app.use(cors());

const pyramidWord = require('./Routes/pyramidWord');    

// Routing the HTTP request handler
app.use('/', pyramidWord);          
app.use('/isPyramid', pyramidWord); 

// Starting the server 
try{
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    });
} catch(error)
{
    console.log(error);
}
