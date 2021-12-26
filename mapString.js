const products = [
    { name: "water bootle", price: 90, color: "red" },
    { name: "mobile phone", price: 60, color: "white" },
    { name: "smart watch", price: 100, color: "blue" },
    { name: "sticky note", price: 40, color: "yellow" },
    { name: "laptop", price: 200, color: "black" },
]

const productsName = products.map(product => product.name);
console.log(productsName);

const productsPrice = products.map(product => product.price);
console.log(productsPrice);

const productColors = products.map(product => product.color);
console.log(productColors);