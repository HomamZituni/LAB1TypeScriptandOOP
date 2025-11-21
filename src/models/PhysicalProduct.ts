import { Product } from "./Product"

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number 
  ) {
    super(sku, name, price);
  }


  get formattedWeight(): string {
    return `${this.weight} kg`;
  }


  getPriceWithTax(): number {
    return this.price * 1.1;
  }


  displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
  }
}

