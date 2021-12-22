const products = [
    { name: "water bootle", price: 90, color: "red" },
    { name: "mobile phone", price: 60, color: "white" },
    { name: "smart watch", price: 100, color: "blue" },
    { name: "smart LAPTOP", price: 400, color: "skyblue" },
    { name: "sticky note", price: 40, color: "yellow" },
    { name: "laptop", price: 200, color: "black" },
]

const includedProducts = products.filter(product => product.name.toLowerCase().includes("laptop".toLowerCase()));

console.log(includedProducts);