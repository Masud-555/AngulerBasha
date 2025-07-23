
export class Cashier {


    itemName!: string;
    quantity!: number;
    price!: number;

    get total(): number {
        return this.quantity * this.price;
    }

    constructor(init?: Partial<Cashier>) {
        Object.assign(this, init);
    }
}
