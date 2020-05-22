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

function findItem(product) {
    let isExist = false;
    for (let a = 0; a < items.length; a++) {
        if (product === items[a]) {
            isExist = true;

            /*
            * if (isExist === true) {
            * console.log(`We have ${item} in stock.`);
              ! the reason we shouldn't put our console for this boolean variable being true within the for loop is bc there is the possibility
              ! of the output being outputted the "array.length" amount of times
            */
        }
    }
    // for (let item of items) {
    //     if (product == item) {
    //         isExist = true;
    //     }
    // }
    //^ shorthand
    if (isExist === true) {
        console.log(`We have ${product} in stock.`);
    } else {
        console.log(`We don't have ${product} in stock.`);
    }
}
findItem("Soda");
findItem("Bread");