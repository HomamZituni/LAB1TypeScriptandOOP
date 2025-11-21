import { Product } from "./Product.js";
import { DiscountableProduct } from "./DiscountableProduct";
export declare class PhysicalProduct extends Product implements DiscountableProduct {
    private _weight;
    constructor(sku: string, name: string, price: number, weight: number);
    get weight(): number;
    get formattedWeight(): string;
    getPriceWithTax(): number;
    applyDiscount(percent: number): void;
}
