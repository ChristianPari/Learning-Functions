// A  function that accepts two parameters; item name and cost
// * Log to us whether we can afford the item or not
// * If you're able to make the purchase, what is our change?
// * Add what items we have purchased into our 'itemsPurchased' array using code
// * Output what's in our bag

let items = ["chips", "soda", "water", "starbursts", "m&m's"];
let cost = [1.50, 1.00, 1.25, .75, .75];
let cash = 5.00;
let itemsPurchased = [];

function purchaseItem(snack, quantity) { // takes in name of item and how many purchased

    for (let i = 0; i < items.length; i++) {

        if (snack == items[i]) { // '==' comparison operator

            if ((cost[i] * quantity) <= cash) {

                let remainingCash = cash - (cost[i] * quantity); // instead of putting the whole equation each time in your code, create a variable to reuse
                //! ALWAYS put variables before your code output, looks neater, if thought process has them after then clean up once you've completed

                console.log("Thank you for your purchase!");
                console.log("You're change is $" + remainingCash.toFixed(2) + ".");

                for (let j = 0; j < quantity; j++) { // looping the snack data through the for loop and pushing each piece of data into the 'itemsPurchased' array

                    itemsPurchased.push(snack); // specifying what parameter is being pushed into the array

                }

                console.log("These are the items in your bag:\n" + quantity, "packages of", itemsPurchased[i], "costing a total of $" + (cost[i] * quantity).toFixed(2) + ".");

            } else {

                console.log("Sorry, you can't afford this.");

            }
        }
    }
}

purchaseItem("chips", 3); // needs to match the data from within the arrays declared at the beginning of the code