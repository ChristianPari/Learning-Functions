// OBJECTIVE: We have a list of cars, each with a price and model.
// We also will have a 'cash' variable that will determine if we can actually rent the car for that many days.
//! We will create a function where we pass the name of the car we want to rent and if we can afford it
//* A FUNCTION NEEDS A UNIQUE NAME

let availableCars = ["Honda", "Toyota", "Chevy"];
let rentalPrices = [150, 100, 125];
let rentedCars = [];
let cash = 105;

// if car exists, log it's availability, and log it's cost
function rentACar(carName) {
    let isExist = false;
    let carCost = 0;

    for (let a = 0; a < availableCars.length; a++) {
        if (carName == availableCars[a]) {
            isExist = true;
            carCost = rentalPrices[a];
        }
    }

    if (isExist == true) {
        console.log(`The ${carName} is available and cost ${carCost}!`);
    } else {
        console.log(`The ${carName} isn't available.`);
    }
}
rentACar("Honda");
rentACar("Toyota");
rentACar("Chevy");