// this program will have a 3 element array of "items"
// another array of each element's price
// another array which is empty called "purchasedItems"
// then a function called "findItem()" which takes a parameter
// if you can afford log it and say leftover cash
// log to the terminal if the item is available in a "availableItems" array

let items = ["Cheese", "Fries", "Soda"];
let itemPrices = [2, 4, 1];
let cash = 3;
let purchasedItems = [];

function findItem(item) {
    let isExist = false;
    let canAfford = false;

    for (let a = 0; a < items.length; a++) {
        if (item === items[a]) {
            isExist = true;

            /*
            * if (isExist === true) {
            * console.log(`We have ${item} in stock.`);
              ! the reason we shouldn't put our console for this boolean variable being true within the for loop is bc there is the possibility
              ! of the output being outputted the "array.length" amount of times
            */

            if (cash >= itemPrices[a]) {
                canAfford = true;
            }
        }
    }
    if (isExist === true) {
        console.log(`${item} is in stock.`);
        if (canAfford === true) {
            console.log(`We can afford ${item}.`);
            for (let c = 0; c < items.length; c++) {
                if (item === items[c]) {
                    console.log(`Our leftover cash will be $${cash - itemPrices[c]}.`);
                }
            }
        } else {
            console.log(`Although, we cannot afford ${item}.`);
        }
    } else {
        console.log(`${item} isn't in stock.`);
    }
}

findItem("Cheese");
findItem("Soda");
findItem("Bread");
findItem("Fries");