import { Product } from "./Product.js";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number
  ) {
    super(sku, name, price);
  }


  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  
  getPriceWithTax(): number {
    return this.price;
  }


  displayDetails(): string {
    return `${super.displayDetails()}, File Size: ${this.formattedFileSize}`;
  }
}
