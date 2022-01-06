//#################################################### roundToPlace ####################################################
/**
 * 
 * @param {Number} num 
 * @param {Number} places 
 * @returns {Number} number rounded to specified places
 */

const { round } = require("lodash");

const roundToPlace = (num, places) => {
    multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}
//TEST: console.log(roundToPlace(.14*30.06, 2));


//################################################ calculateRoundedHours ################################################
/**
 * 
 * @param {Number} hours 
 * @param {Number} minutes 
 * @returns {Number} total hours 
 */
const calculateRoundedHours = (hours, minutes) => {
    return roundToPlace(hours + (minutes/60), 2);

}
// TEST: console.log(calculateRoundedHours(hoursTest.hours, hoursTest.minutes));


//################################################# calculateGrossPay #################################################
/**
 * 
 * @param {Number} hours 
 * @param {Number} dollars 
 * @returns {Number} gross dollars, rounded to two decimal places
 */
const calculateGrossPay = (hours, dollars) => {
    return roundToPlace(hours * dollars, 2);
}
// TEST: console.log(calculateGrossPay(3.69, 69.69));


//################################################# calculateGasCost ##################################################
/**
 * 
 * @param {Number} gasPrice 
 * @param {Number} mpg miles per gallon
 * @param {Number} milesDriven 
 * @returns {Number} total gas cost, rounded to two decimal places
 */
const calculateGasCost = (gasPrice, mpg, milesDriven) => {
    const gasCostPerMile = gasPrice / mpg;
    return roundToPlace(gasCostPerMile * milesDriven, 2);
}
// TEST: console.log(calculateGasCost(2.79, 20, 30.06));


//############################################# calculateMaintenanceCost ##############################################
/**
 * 
 * @param {Number} mntCostPerMile 
 * @param {number} milesDriven 
 * @returns {Number} total maintenance cost
 */
 const calculateMaintenanceCost = (mntCostPerMile, milesDriven) => {
    return roundToPlace(mntCostPerMile * milesDriven, 2)
}
// TEST: console.log(calculateMaintenanceCost(.09, 30.06));



//############################################### calculateHourlyProfit ################################################
/**
 * 
 * @param {Number} totalProfit 
 * @param {Number} hours 
 * @returns {Number} hourly profit rounded to two decimal places
 */
 const calculateHourlyProfit = (totalProfit, hours) => {
    return roundToPlace(totalProfit / hours, 2) ;
    
}
//TEST: console.log(calculateHourlyProfit(60, 4.63));

exports.getCalculatedStrings = (milesDriven, hours, minutes, grossDollars, mpg, gasPrice, maintenanceCost) => {
    const totalHours =  calculateRoundedHours(hours, minutes);
    
    const totalGasCost = calculateGasCost(gasPrice, mpg, milesDriven);
    const totalMaintenanceCost = calculateMaintenanceCost(maintenanceCost, milesDriven);
    const totalCost = totalGasCost + totalMaintenanceCost;


    const totalProfit = grossDollars - totalCost;
    const hourlyProfit = calculateHourlyProfit(totalProfit, totalHours);

    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return {
        totalGasCost: totalGasCost.toFixed(2),
        totalMaintenanceCost: totalMaintenanceCost.toFixed(2),
        totalCost: totalCost.toFixed(2),
        grossIncome: grossDollars.toFixed(2),
        totalProfit: totalProfit.toFixed(2),
        hourlyProfit: hourlyProfit.toFixed(2),
    }
}
