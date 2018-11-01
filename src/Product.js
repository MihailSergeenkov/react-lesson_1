class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    view() {
        return `${this._name}: ${this._price}`;
    }
}

export default Product;