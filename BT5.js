// Khai báo mảng chứa các đối tượng Book
let books = [
    { author: "Tác giả A", name: "Sách A" },
    { author: "Tác giả B", name: "Sách B" },
    { author: "Tác giả C", name: "Sách C" },
    { author: "Tác giả A", name: "Sách D" }
];

// Yêu cầu người dùng nhập tên tác giả
let searchAuthor = prompt("Nhập tên tác giả:");

// Biến để kiểm tra xem có tìm thấy sách của tác giả hay không
let found = false;

// Duyệt qua mảng sách để tìm sách của tác giả nhập vào
for (let index in books) {
    if (books[index].author === searchAuthor) {
        document.write("Thông tin sách của tác giả " + searchAuthor + ":");
        document.write("Tên sách: " + books[index].name);
        found = true;
    }
}

// Nếu không tìm thấy sách của tác giả, thông báo ra màn hình
if (!found) {
    document.write("Không tìm thấy sách của tác giả " + searchAuthor);
}
