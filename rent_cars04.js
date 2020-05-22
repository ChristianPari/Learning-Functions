// OBJECTIVE: We have a list of cars, each with a price and model.
// We also will have a 'cash' variable that will determine if we can actually rent the car for that many days.
//! We will create a function where we pass the name of the car we want to rent and for how many days we want to rent it for.
//* A FUNCTION NEEDS A UNIQUE NAME

let availableCars = ["Honda", "Toyota", "Chevy"];
let rentalPrices = [150, 100, 200];
let rentedCars = [];
let cash = 575;

console.log(`We have $${cash} and need to rent a car.\n`);

// function to take two parameters 'car name' and 'days rented'
function rentACar(carName, daysRented) { // the parameters will receive the data from the function when its called
    let isExist = false;
    let carCost = 0;
    let carCostTotals = 0;
    let leftoverCash = 0;

    for (let a = 0; a < availableCars.length; a++) {
        if (carName == availableCars[a]) {
            isExist = true;
            carCost = rentalPrices[a];
        }
    }

    if (isExist == true) {
        console.log(`The ${carName} is available and cost $${carCost} per day.`);
    } else {
        console.log(`The ${carName} isn't available.`);
    }

    for (let a = 0; a < availableCars.length; a++) {
        carCostTotals = rentalPrices[a] * daysRented;
        leftoverCash = cash - (carCostTotals);
        if (carName == availableCars[a]) {
            if (cash >= (rentalPrices[a] * daysRented)) {
                console.log(`It will cost $${carCostTotals} to rent the ${carName}.`);
                console.log(`We can afford ${carName}!`);
                console.log(`We have $${leftoverCash} in leftover cash.\n`)
                rentedCars.push(` ${carName}`);
            } else {
                console.log(`It will cost $${carCostTotals} to rent the ${carName}.`);
                console.log(`We cannot afford ${carName}.\n`);
            }
        }
    }

}
rentACar("Honda", 3);
rentACar("Toyota", 3);
rentACar("Chevy", 3);
console.log(`The vehicles we could possibly rent are the:${rentedCars}.`);