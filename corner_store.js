// create a renting or store setting program where you have a populated array, remove item(s) from that array and add them to a empty array.
// Once finished, research more array functions and try to implement them into this program

let products = ["M&Ms", "Skittles", "Milky Way"];
let purchased = [];

function bought(item) {
    for (let a = 0; a < products.length; a++) {
        if (item == products[a]) {
            console.log(`You have purchased ${item}.`);
            let purchase = products.splice(a, 1);
            purchased.push(purchase[0]);
        }
    }
}
bought("Milky Way");
bought("Skittles");
console.log(purchased);
console.log(products);