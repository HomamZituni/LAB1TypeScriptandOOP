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


