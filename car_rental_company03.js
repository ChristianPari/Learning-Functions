// Pass to the function a car name and number of days and get in return whether or not we can afford to rent the car for that many days

let carCategories = ["Economy", "Mid-Size", "Full-Size", "Luxury"];
let carNames = ["Toyota Prius", "Honda Accord", "Nissan Maxima", "Audi R8"];
let rentalCost = [50, 200, 350, 550];
let singleDayCash = 250;
let weeksWorthOfCash = 1000;
let carsRented = [];

// This function will take two parameters (within the paranthese; what parameters you will receive); the name of the car, and the days rented
//! The variable created in the FUNCTION will only be able to be used within the function, LOCAL SCOPE
function rentCar(carName, numberOfDaysRented) { // parameters need to be TOTALLY new variables
    console.log("This is how you rent cars!")
    console.log("We are renting a", carName, "for", numberOfDaysRented, "days.");
}

// This function sends two arguments (within the paranthese; when you send arguments into the function); the name of the car, and the days rented
rentCar("Honda", 8); // this is sending the data into the function relative to the parameters created previously