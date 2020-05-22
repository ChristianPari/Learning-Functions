// log each index of each element and then split up each element by the words 'new array'
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let logging = (array) => {
    for (let a = 0; a < array.length; a++) {
        console.log(`New Array`);
        for (let b = 0; b < array[a].length; b++) {
            console.log(`${array[a][b]}`);
        }
    }
}

logging(arr);