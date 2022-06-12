const express = require('express')
const axios = require('axios')
const path = require('path');

const PORT = process.env.PORT || 5000;
// running the server on the port 5000 locally and on any other port provided by HEROKU

//creating app 
const app = express();
app.use(express());
app.use(express.static(path.join(__dirname + '/public')))


if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname + '/public')))
}



/* 

    CODE GOES HERE

*/

app.listen(PORT , () => {
    console.log('The server is running on PORT : ' , PORT);
})