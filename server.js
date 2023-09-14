const express=require('express');
const path= require('path');
const favicon= require('serve-favicon');
const logger= require('morgan');
require ('dotenv').config();
// connect to database
require('./config/database');

//backend 3001, frontend 3000
const app=express();
const PORT = process.env.PORT  || 3001;

//middleware
app.use(logger('dev'))
app.use(express.json())

//will check for a token and create an req.user pro in the request
app.use(require('./config/checkToken'))



// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


//put API Routes here , before "catch all" route
// mount a router, going to api/users will to go ./routes/api
app.use('/api/users', require('./routes/api/users'))






// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(PORT, ()=>{
    console.log(`Express app is running on ${PORT}`);})
