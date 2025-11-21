export declare abstract class Product {
    sku: string;
    name: string;
    price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    abstract getPriceWithTax(): number;
}
