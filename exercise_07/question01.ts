class Vehicle {
    private _licensePlate: string;
    private _year: number;
    constructor(licensePlate: string, year: number) {
        this._licensePlate = licensePlate;
        this._year = year;
    }
}

class Car extends Vehicle {
    private _model: string;
    constructor(licensePlate: string, year: number, model: string) {
        super(licensePlate, year);
        this._model = model;
    }
}

class ElectricCar extends Car {
    private _batteryLife: number;
    constructor(licensePlate: string, year: number, model: string, batteryLife: number) {
        super(licensePlate, year, model);
        this._batteryLife = batteryLife;
    }
}
