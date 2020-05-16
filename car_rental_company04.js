// Pass to the function a car name and number of days and get in return whether or not we can afford to rent the car for that many days

let carCategories = ["Economy", "Mid-Size", "Full-Size", "Luxury"];
let carNames = ["Toyota Prius", "Honda Accord", "Nissan Maxima", "Audi R8"];
let rentalCost = [50, 200, 350, 550];
let budget = 1500;

// This function will take two parameters (within the paranthese; what parameters you will receive); the name of the car, and the days rented and tell us if we can afford to rent that car for a specified number of days (how much does it cost)
//* output: car name, how much it cost to rent for the number of days we need, and whether we can afford it
//! The variable created in the FUNCTION will only be able to be used within the function, LOCAL SCOPE
function rentCar(carName, numberOfDaysRented) { // parameters need to be TOTALLY new variables

    for (let i = 0; i < carNames.length; i++) {
        if (carName == carNames[i]) { // comparison operator to say the whatever carName is relative to each car name in carNames; relative to index
            if ((rentalCost[i] * numberOfDaysRented) <= budget) {
                console.log("The", carNames[i], "cost $" + (rentalCost[i] * numberOfDaysRented), "for the week. We can afford this car!");
            } else {
                console.log("The", carNames[i], "cost $" + (rentalCost[i] * numberOfDaysRented), "for the week. We cannot afford this car.");
            }
        }
    }
}

// This function sends two arguments (within the paranthese; when you send arguments into the function); the name of the car, and the days rented
// this is sending the data into the function relative to the parameters created previously; also must be EXACT to the data from the arrays prior
rentCar("Honda Accord", 8);