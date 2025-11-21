export function sortByName(products) {
    return products.slice().sort((a, b) => a.name.localeCompare(b.name));
}
export function sortByPrice(products) {
    return products.slice().sort((a, b) => a.price - b.price);
}
//# sourceMappingURL=sortProducts.js.map