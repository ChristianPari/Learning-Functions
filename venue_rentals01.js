// create an array of star specific venues
// create an array of venue names
// create a variable venue cost per hour
// create a variable for our budget

let starVenues = [5, 3, 1];
let venues = ["Venus", "Earth", "Pluto"];
let costPerHour = [150, 100, 50];
let budget = 700;

function rentVenue(venueName, hoursRented) {

    for (let i = 0; i < venues.length; i++) {

        if (venueName == venues[i]) {

            if ((costPerHour[i] * hoursRented) <= budget) {
                console.log("We can afford the", starVenues[i], "star venue '" + venues[i] + "'.");
            } else {
                console.log("We cannot afford the", starVenues[i], "star venue '" + venues[i] + "'.");
            }

        }

    }

}

rentVenue("Venus", 7);
rentVenue("Earth", 5);
rentVenue("Pluto", 10);