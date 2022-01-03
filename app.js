const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));



//################################################# route: / #################################################
app.get('/', (req, res) =>{
    res.render('home');
});



//############################################# route: /Calculate #############################################






const localPort = 3000;
app.listen(localPort, () => {
    console.log('App is running on port ' + localPort);
})