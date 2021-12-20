const products = [
    { name: "water bootle", price: 90, color: "red" },
    { name: "mobile phone", price: 60, color: "white" },
    { name: "smart watch", price: 100, color: "blue" },
    { name: "smart laptop", price: 400, color: "skyblue" },
    { name: "sticky note", price: 40, color: "yellow" },
    { name: "laptop", price: 200, color: "black" },
]
const filteredProducts = products.filter(product => product.price >= 100);
console.log(filteredProducts);

// ================== products filter ===============





