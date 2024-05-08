// Mảng chứa các đối tượng sản phẩm
let products = [
    { id: 1, product_name: "Sản phẩm A", price: 200 },
    { id: 2, product_name: "Sản phẩm B", price: 100 },
    { id: 3, product_name: "Sản phẩm C", price: 150 },
    { id: 4, product_name: "Sản phẩm D", price: 300 },
];

// Hàm sắp xếp mảng products theo giá tăng dần
function sortByPriceAscending(products) {
    // Sử dụng phương thức sort để sắp xếp mảng theo giá tăng dần
    products.sort((a, b) => a.price - b.price);
}

// Gọi hàm để sắp xếp mảng products theo giá tăng dần
sortByPriceAscending(products);

// In ra mảng đã được sắp xếp ra ngoài màn hình
console.log("Danh sách sản phẩm sau khi được sắp xếp theo giá tăng dần:");
console.log(products);
