const { priceService, tripService, tripClass } = require("./services/service");

let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rio-de-janeiro", "tokyo"];

function getWeather(cityId) {
    const temperature = 20;
    return { city : cityId.toUpperCase(), temperature : temperature }
}

const weather = getWeather(favoriteCityId);

let { city, temperature } = weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...otherCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId);

// class Trip {
//     constructor(id, name, imageUrl, price) {
//         this.id = id;
//         this.name = name;
//         this.imageUrl = imageUrl;
//         this._price = price;
//     }

//     getDefaultTrip() {
//         return this.id + " " + this.name + " " + this.imageUrl;
//     }

//     toString() {
//         return this;
//     }
// }

const parisTrip = new tripClass("paris", "Paris", "img/paris.jpg");
let { name } = parisTrip;
console.log(name);

console.log(parisTrip.toString());
parisTrip._price = 100;
console.log(parisTrip.toString());
console.log(parisTrip.getDefaultTrip().toString());

class FreeTrip extends tripClass {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

}

freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

price$ = priceService.findPriceByTripId(1);
price$.then(price => console.log(price)).catch(error => console.log(error));

trip$ = tripService.findByName("Paris");
trip$.then(trip => console.log(trip)).catch(error => console.log(error));


