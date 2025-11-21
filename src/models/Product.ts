export abstract class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  abstract getPriceWithTax(): number;
}

