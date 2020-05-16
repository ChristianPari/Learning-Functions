// an array of 4 category names; economy, mid-size, full-size, luxury
// an array called cars; car types relative to category names; prius, accord, maxima, audi R8
// an array of rental cost per day for each car
// an array of days each car is rented
// output a breakdown of each cars total cost for all the days it's rented for, using a for loop
// output "we can afford" if theres enough money to purchase each vehicle and if we don't have enough then output "Sorry, we can't"
// * create a function to that will take in a rented vehicle and how many days it was rented for
// * add the cars rented to the 'carsRented' array
// * remove the cars that were rented from the 'availableCars' array

let carCategories = ["Economy", "Mid-Size", "Full-Size", "Luxury"];
let availableCars = ["Toyota Prius", "Honda Accord", "Nissan Maxima", "Audi R8"];
// let rentalCost = [50, 200, 350, 550];
// let daysRented = [7, 3, 10, 2];
let budget = 1000;
let carsRented = [];

function vehiclesRented(rentedVehicle, rentedDays, costForRental) { // creating the function needed to output cars being rented
    for (let a = 0; a < availableCars.length; a++) { // for loop to cycle through each car
        if (rentedVehicle == availableCars[a]) { // making the parameter be compared and equal to 'availableCars' array data; will be TRUE as long as arguments match our array data
            if ((rentedDays * costForRental) <= budget) {
                console.log("We can afford to rent the", rentedVehicle + ".");
                console.log("We will rent the", rentedVehicle + ".");
                carsRented.push(rentedVehicle);
                if (rentedVehicle === availableCars[0]) {
                    availableCars.splice(0, 1);
                } else if (rentedVehicle === availableCars[1]) {
                    availableCars.splice(1, 1);
                } else if (rentedVehicle === availableCars[2]) {
                    availableCars.splice(2, 1);
                } else {
                    availableCars.splice(3, 1);
                }
            } else {
                console.log("We cannot afford to rent the", rentedVehicle + ".");
            }
        }
    }
}
vehiclesRented("Toyota Prius", 7, 50);
vehiclesRented("Honda Accord", 3, 200);
vehiclesRented("Nissan Maxima", 10, 350);
vehiclesRented("Audi R8", 2, 550);
console.log("The cars that have been rented are: " + carsRented);
console.log("The cars still available for rent are: " + availableCars);








// for (let i = 0; i < availableCars.length; i++) {

//     let revenue = rentalCost[i] * daysRented[i];

//     console.log("The " + carCategories[i] + " car is a " + availableCars[i] + ".", "It costs $" + rentalCost[i] + " per day(s) rented.", "Renting this vehicle for " + daysRented[i] + " days" + " will cost you $" + (rentalCost[i] * daysRented[i]) + ".");

//     if (rentalCost[i] <= singleDayCash) {
//         console.log("We can afford this car!\n");
//     } else {
//         console.log("Sorry, we can't afford this car.\n");
//     }

//     totalRevenue += revenue;

// }

// console.log("The total revenue from these vehicles being rented equates to $" + totalRevenue);