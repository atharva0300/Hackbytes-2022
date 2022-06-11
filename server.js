const express = require('express')
const axios = require('axios')

const PORT = process.env.PORT || 5000;
// running the server on the port 5000 locally and on any other port provided by HEROKU

//creating app 
const app = express();
app.use(express());


/* 

    CODE GOES HERE

*/

app.listen(PORT , () => {
    console.log('The server is running on PORT : ' , PORT);
})