const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

//command to call our express app and setting it to use in our application
const app = express();
app.use(express.json());

//we will set up file to serve static content, which will later generated from our react app in production

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

//we are going to configure our server file to connect to the MongoDB database and start the server on port 4000

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

  