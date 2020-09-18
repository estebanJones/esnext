const { Trip } = require("./trip");


class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

}

exports.FreeTrip = FreeTrip;