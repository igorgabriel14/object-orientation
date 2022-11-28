class Hotel {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    addReservations(): void {
        this.amount++;
    }
}

let hotel: Hotel = new Hotel(2);
hotel.addReservations()
console.log(`A quantidade de reservas é ${hotel.amount}.`);
