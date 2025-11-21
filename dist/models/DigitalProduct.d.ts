import { Product } from "./Product.js";
export declare class DigitalProduct extends Product {
    private fileSize;
    constructor(sku: string, name: string, price: number, fileSize: number);
    get formattedFileSize(): string;
    getPriceWithTax(): number;
    displayDetails(): string;
}
