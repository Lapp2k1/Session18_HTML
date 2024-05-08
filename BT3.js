// Yêu cầu người dùng nhập số lượng sinh viên
let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));

// Khai báo mảng để lưu trữ thông tin sinh viên
let students = [];

// Vòng lặp để nhập thông tin của mỗi sinh viên
for (let i = 0; i < numberOfStudents; i++) {
    let student = {}; // Khai báo đối tượng sinh viên

    // Yêu cầu nhập thông tin của sinh viên
    student.id = prompt(`Nhập ID của sinh viên thứ ${i + 1}:`);
    student.name = prompt(`Nhập tên của sinh viên thứ ${i + 1}:`);

    // Thêm sinh viên vào mảng
    students.push(student);
}

// In mảng sinh viên ra màn hình
document.write("Danh sách sinh viên:");
document.write(students);
