const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const res = require('express/lib/response');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));



//################################################# route: / #################################################
app.get('/', (req, res) =>{
    res.render('home', {
        resultsClass: 'hidden'
    });
});



//############################################# route: /calculate #############################################
app.post('/calculate', (req, res) =>{
    const miles = req.body.thisDashMiles;
    const hours = req.body.thisDashHours;
    const minutes = req.body.thisDashMinutes;
    const dollars = req.body.thisDashDollars;
    const mpg = req.body.constCarMPG;
    const fuelCost = req.body.constFuelCost;
    const maintenanceCost = req.body.constMaintenanceCost;
    // console.log(miles,hours, minutes, dollars, mpg, fuelCost, maintenanceCost);
    res.render('home', {
        resultsClass: '',
    }
    )
});






const localPort = 3000;
app.listen(localPort, () => {
    console.log('App is running on port ' + localPort);
})