import { Product } from "./Product";
import { DiscountableProduct } from "./DiscountableProduct";

export class PhysicalProduct extends Product implements DiscountableProduct {
  private _weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this._weight = weight;
  }

  get weight(): number {
    return this._weight;
  }

  get formattedWeight(): string {
    return `${this._weight} kg`;
  }

  getPriceWithTax(): number {
    return this.price * 1.1; // 10% tax
  }

  applyDiscount(percent: number): void {
    this.price = this.price * (1 - percent / 100);
  }
}

