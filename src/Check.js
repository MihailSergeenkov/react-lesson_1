import Product from "~/src/Product";

class Check {
    constructor() {
        this._products = [];
    }

    get products() {
        return this._products;
    }

    add(productName, productPrice) {
        try {
            this._products.push(new Product(productName, productPrice));
            return true;
        } catch(e) {
            return false;
        }        
    }

    delete(position) {
        return this._products.splice(position - 1, 1);
    }

    result() {
        return {
            products: this._products.length,
            result: this._products.reduce((sum, product) => sum + product.price, 0)
        };
    }
}

export default Check;