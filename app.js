const { priceService, tripService } = require("./services/service");
const { FreeTrip } = require("./entities/freetrip");
const { Trip } = require("./entities/trip");

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


const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
let { name } = parisTrip;
console.log(name);

console.log(parisTrip.toString());
parisTrip._price = 100;
console.log(parisTrip.toString());
console.log(parisTrip.getDefaultTrip().toString());


const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


const trip$ = tripService.findByName("Paris");
trip$.then(trip => console.log(trip)).catch(error => console.log(error));

const trip2$ = tripService.findByName("Toulouse");
trip$.then(trip => console.log(trip)).catch(error => console.log(error));

const linkService$ = tripService.findByName("Rio de Janeiro");
linkService$.then(trip => priceService.findPriceByTripId(trip.id)).then(price => console.log(price)).catch(error => console.log(error));

const linkService2$ = tripService.findByName("Nantes");
linkService2$.then(trip => priceService.findPriceByTripId(trip.id)).then(price => console.log(price)).catch(error => console.log(error));

