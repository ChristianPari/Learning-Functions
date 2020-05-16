// make the output say if we can or can't afford each car for the week

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

    if (weeksWorthOfCash >= rentalCost[i] * 7) {
        console.log("We can afford this car!");
    } else {
        console.log("We can't afford this car.");
    }

}