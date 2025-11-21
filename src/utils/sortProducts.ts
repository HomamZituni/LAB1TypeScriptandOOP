import { Product } from "../models/Product";

export function sortByName(products: Product[]): Product[] {
  return products.slice().sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByPrice(products: Product[]): Product[] {
  return products.slice().sort((a, b) => a.price - b.price);
}
