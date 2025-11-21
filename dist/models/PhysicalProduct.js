import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight;
    }
    get weight() {
        return this._weight;
    }
    get formattedWeight() {
        return `${this._weight} kg`;
    }
    getPriceWithTax() {
        return this.price * 1.1; // 10% tax
    }
    applyDiscount(percent) {
        this.price = this.price * (1 - percent / 100);
    }
}
//# sourceMappingURL=PhysicalProduct.js.map