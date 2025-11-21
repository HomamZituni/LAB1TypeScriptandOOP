import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { sortByName, sortByPrice } from "./utils/sortProducts.js";
const laptop = new PhysicalProduct("P1", "Laptop", 1200, 2.5);
const ebook = new DigitalProduct("D1", "E-Book", 30, 5);
const inventory = [laptop, ebook];
console.log("Original Inventory:");
for (const product of inventory) {
    console.log(product.displayDetails());
    console.log("Price with tax:", calculateTax(product));
    console.log("--------------------");
}
laptop.applyDiscount(10);
console.log("After 10% manual discount on Laptop:");
console.log(laptop.displayDetails());
console.log("Price with tax:", calculateTax(laptop));
console.log("--------------------");
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
console.log("Inventory after bulk discount:");
for (const product of inventory) {
    console.log(product.displayDetails());
    console.log("Price with tax:", calculateTax(product));
    console.log("--------------------");
}
//# sourceMappingURL=main.js.map