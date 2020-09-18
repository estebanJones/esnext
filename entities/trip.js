class Trip {
    constructor(id, name, imageUrl, price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this._price = price;
    }

    getDefaultTrip() {
        return this.id + " " + this.name + " " + this.imageUrl;
    }

    toString() {
        return this;
    }
}

exports.Trip = Trip;