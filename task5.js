let staff = {
  id: 1,
  name: "A",
  age: 22,
  salary: 1000,
};

let company = [];
company.push(staff);

console.log("Dữ liệu ban đầu:");
console.log(company);

let idnum = staff.id;

let userInput;
do {
  userInput = prompt("Chọn thao tác: C/R/U/D/E=?");
  switch (userInput) {
    case "C":
      let newstaff = {};
      newstaff.id = idnum + 1;
      newstaff.name = prompt("Nhập tên nhân viên mới:");
      newstaff.age = parseInt(prompt("Nhập tuổi nhân viên mới:"));
      newstaff.salary = parseInt(prompt("Nhập lương nhân viên mới:"));
      company.push(newstaff);
      idnum++;
      console.log("Nhân viên mới được thêm:");
      console.log(newstaff);
      break;

    case "R":
      console.log("Danh sách nhân viên:");
      console.log(company);
      break;

    case "U":
      let updateId = parseInt(prompt("Nhập ID của nhân viên cần cập nhật:"));
      let foundStaffIndex = company.findIndex((staff) => staff.id === updateId);
      if (foundStaffIndex !== -1) {
        let updateField = prompt("Nhập trường cần cập nhật (name/age/salary):");
        let updateValue = prompt(`Nhập giá trị mới cho trường ${updateField}:`);
        company[foundStaffIndex][updateField] = updateValue;
        console.log("Thông tin nhân viên sau khi cập nhật:");
        console.log(company[foundStaffIndex]);
      } else {
        console.log("Không tìm thấy nhân viên với ID đã nhập.");
      }
      break;

    case "D":
      let deleteId = parseInt(prompt("Nhập ID của nhân viên cần xóa:"));
      let deleteIndex = company.findIndex((staff) => staff.id === deleteId);
      if (deleteIndex !== -1) {
        let deletedStaff = company.splice(deleteIndex, 1);
        console.log("Nhân viên đã bị xóa:");
        console.log(deletedStaff);
      } else {
        console.log("Không tìm thấy nhân viên với ID đã nhập.");
      }
      break;

    case "E":
      console.log("Thoát khỏi chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
      break;
  }
} while (userInput !== "E");
