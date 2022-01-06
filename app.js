const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const res = require('express/lib/response');

const calculations = require('./local_modules/calculations.js')

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));



//################################################# route: / #################################################
app.get('/', (req, res) =>{
    res.render('home', {
        resultsClass: 'hidden',
        totalGasCost: '',
        totalMaintenanceCost: '',
        grossIncome: '',
        totalCost: '', 
        totalProfit: '', 
        hourlyProfit: ''
    });
});



//############################################# route: /calculate #############################################
app.post('/calculate', (req, res) =>{
    const miles = parseFloat(req.body.thisDashMiles);
    const hours = parseFloat(req.body.thisDashHours);
    const minutes = parseFloat(req.body.thisDashMinutes);
    const dollars = parseFloat(req.body.thisDashDollars);
    const mpg = parseFloat(req.body.constCarMPG);
    const fuelCost = parseFloat(req.body.constFuelCost);
    const maintenanceCost = parseFloat(req.body.constMaintenanceCost);
    
    const calculated = calculations.getCalculatedStrings(
        miles, hours, minutes, dollars, mpg, fuelCost, maintenanceCost
        );
    const {totalGasCost, totalMaintenanceCost, totalCost, totalProfit, hourlyProfit, grossIncome} = calculated;
    console.log(calculated);
    res.render('home', {
        resultsClass: '',
        totalGasCost: totalGasCost,
        totalMaintenanceCost: totalMaintenanceCost,
        grossIncome: grossIncome,
        totalCost: totalCost, 
        totalProfit: totalProfit, 
        hourlyProfit: hourlyProfit
    }
    );
});






const localPort = 3000;
app.listen(localPort, () => {
    console.log('App is running on port ' + localPort);
})