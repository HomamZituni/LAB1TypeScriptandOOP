import {PhysicalProduct} from "./models/PhysicalProduct"
import {DigitalProduct} from "./models/DigitalProduct"
import {calculateTax} from "./utils/taxCalculator"

const laptop = new PhysicalProduct("P1", "Laptop", 1200, 2.5);

const ebook = new DigitalProduct("D1", "E-Book", 30, 5);

const inventory = [laptop, ebook];

for (const product of inventory) {
  console.log(product.displayDetails());
  console.log("Price with tax:", calculateTax(product));
  console.log("--------------------");
}

laptop.applyDiscount(10);
console.log("After 10% discount:");
console.log(laptop.displayDetails());
console.log("Price with tax:", calculateTax(laptop));
console.log("--------------------");


import { sortByName, sortByPrice } from "./utils/sortProducts";

console.log("Inventory sorted by name:");
const sortedByName = sortByName(inventory);
for (const product of sortedByName) {
  console.log(product.displayDetails(), "- Price with tax:", calculateTax(product));
}
console.log("--------------------");

console.log("Inventory sorted by price:");
const sortedByPrice = sortByPrice(inventory);
for (const product of sortedByPrice) {
  console.log(product.displayDetails(), "- Price with tax:", calculateTax(product));
}
console.log("--------------------");

const bulkWeightThreshold = 2; 
const bulkDiscountPercent = 5; 

for (const product of inventory) {
  if (product instanceof PhysicalProduct && product.weight > bulkWeightThreshold) {
    product.applyDiscount(bulkDiscountPercent);
    console.log(`Bulk discount applied to ${product.name} (${bulkDiscountPercent}% off)`);
  }
}
