// Khai báo đối tượng product
let product = {
    id: 1,
    name: "Sản phẩm A",
    price: 1000,
    quantity: 10
};

// Sử dụng vòng lặp for...in để in tất cả các thuộc tính và giá trị của product
document.write("Thông tin sản phẩm:");
for (let key in product) {
    document.write(`${key}: ${product[key]}`);
}
