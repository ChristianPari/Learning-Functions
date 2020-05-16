// an array of 4 category names; economy, mid-size, full-size, luxury
// an array called cars; car types relative to category names; prius, accord, maxima, audi R8
// an array of rental cost per day for each car
// an array of days each car is rented
// output a breakdown of each cars total cost for all the days it's rented for, using a for loop
// output "we can afford" if theres enough money to purchase each vehicle and if we don't have enough then output "Sorry, we can't"

let carCategories = ["Economy", "Mid-Size", "Full-Size", "Luxury"];
let carNames = ["Toyota Prius", "Honda Accord", "Nissan Maxima", "Audi R8"];
let rentalCost = [50, 200, 350, 550];
let daysRented = [7, 3, 10, 9];
let totalRevenue = 0;
let singleDayCash = 250;
let weeksWorthOfCash = 1000;

for (let i = 0; i < carNames.length; i++) {

    let revenue = rentalCost[i] * daysRented[i];

    console.log("The " + carCategories[i] + " car is a " + carNames[i] + ".", "It costs $" + rentalCost[i] + " per day(s) rented.", "Renting this vehicle for " + daysRented[i] + " days" + " will cost you $" + (rentalCost[i] * daysRented[i]) + ".");

    if (rentalCost[i] <= singleDayCash) {
        console.log("We can afford this car!\n");
    } else {
        console.log("Sorry, we can't afford this car.\n");
    }

    totalRevenue += revenue;

}

console.log("The total revenue from these vehicles being rented equates to $" + totalRevenue);