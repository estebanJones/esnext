const { Trip } = require("../entities/trip");

class TripService{
    constructor(){// TODO Set of 3 trips//// 
        this.tripSet = new Set();
        this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{// ici l'exécution du code est asynchrone// TODO utiliser resolve et reject en fonction du résultat de larecherche
                this.tripSet.forEach(element => {
                    if(tripName === element.name) {
                        resolve(element);
                    } 
                });
                reject("Non trouvé ! " + tripName);
            },2000)
        });
    }
}
        
class PriceService{
    constructor(){// TODO Map of 2 trips// 'paris' --> price == 100// 'rio-de-janeiro' --> price == 800)// no price for 'nantes'
        this.infos = new Map();
        this.infos.set(1, { id: "paris", price: 100 });
        this.infos.set(2, { id: "nantes"});
        this.infos.set(2, { id: "rio-de-janeiro", price: 800});
    }

    findPriceByTripId(tripId){
        return new Promise((resolve,reject) => { 
            setTimeout(()=>{// ici l'exécution du code est asynchrone// TODO utiliser resolve et reject en fonction du résultat dela recherche
                for(const [ key, value ] of this.infos) {
                    console.log("key " + key + " tripId " + tripId);
                    if(value.id === tripId) {
                        resolve(value.price);
                    }
                }
                reject("Ce prix n'existe pas pour l'id " + tripId);
            },2000);
        });

    }
}

exports.priceService = new PriceService();
exports.tripService = new TripService();
