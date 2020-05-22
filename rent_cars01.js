// OBJECTIVE: We have a list of cars, each with a price and model.
// We also will have a 'cash' variable that will determine if we can actually rent the car for that many days.
//! We will create a function where we pass the name of the car we want to rent and if we can afford it
//* A FUNCTION NEEDS A UNIQUE NAME

let availableCars = ["Honda", "Toyota", "Chevy"];
let rentalPrices = [150, 100, 125];
let rentedCars = [];
let cash = 105;

// function to take one parameter 'car name' and output if we can afford said vehicle
function rentACar(carName) { // the parameters will receive the data from the function when its called
    for (let a = 0; a < availableCars.length; a++) { // loops through the data when variable 'a' is assigned to a variable
        if (carName == availableCars[a]) { // code block will run if a argument matches a 'availableCars' string
            if (cash >= rentalPrices[a]) { // code block will run if 'cash' is more than  the rental price for the car name thats being received in the function
                console.log(`We can afford ${carName}!`);
                rentedCars.push(carName);
            } else { // will run if the previous code is false
                console.log(`We cannot afford ${carName}.`);
            }
        }
    }
}
rentACar("Honda"); // calling carName "Honda"
rentACar("Toyota"); // ""
rentACar("Chevy"); // ""
console.log(`The rented cars are ${rentedCars}.`); // outputting what cars were pushed into our rentedCars variable