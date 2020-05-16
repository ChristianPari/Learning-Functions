// ! TRYING TO WORK WITH TERNARY OPERATOR TO SHORTEN MY CODE
// create an array of star specific venues
// create an array of venue names
// create a variable venue cost per hour
// create a variable for our budget
// create an array for each venues max guest capacity
// create a variable for the group size thats looking for a venue
//* output: the venues we can afford and if our guest capacity can be met

let starVenues = [5, 3, 1];
let venues = ["Venus", "Earth", "Pluto"];
let venueCap = [400, 250, 100];
let groupSize = 225;
let costPerHour = [150, 100, 50];
let budget = 700;

function rentVenue(venueName, hoursRented) {
    for (let i = 0; i < venues.length; i++) {

        venueName == venues[i] ?
            (costPerHour[i] * hoursRented <= budget) ?
            (venueCap[i] <= groupSize ?
                console.log("We can afford", venueName, "and it will hold our group size!") :
                console.log("We can afford", venueName, "but it wont hold our group size.")) :
            console.log("We can afford", venueName, "but it wont hold our group size.") : console.log("hi"); // had to make another output...???

        // if (venueName == venues[i]) {
        //     if ((costPerHour[i] * hoursRented) <= budget) {
        //         if (venueCap[i] <= groupSize) {
        //             console.log("We can afford", venueName, "and it will hold our group size!")
        //         } else {
        //             console.log("We can afford", venueName, "but it wont hold our group size.");
        //         }
        //     }
        // }
    }
}

rentVenue("Venus", 5);
rentVenue("Earth", 7);
rentVenue("Pluto", 10);