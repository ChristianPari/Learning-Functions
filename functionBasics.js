// example of a function
/*
>function is the keyword and must be used when creating a function
>then supply the function name
>then the code block (must have '()' after the function name so that we can put data into it)
*/

function countToTwenty() { // creating a function name 'countToTwenty'
    let number = 0; //! MUST create the variable before making a loop
    while (number <= 20) { // create the while loop and assign a conditional statement
        console.log(number); // number outputting
        number++; // telling the while loop to increment 'number' by 1 each time the condition is executed
    }
}
countToTwenty(); // to call a function MUST use function name with paranethese '()' at the end w/ semi-colon ';'