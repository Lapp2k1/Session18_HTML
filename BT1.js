let information = {
    id: "",
    name: "",
    phone: "",
    address: ""
};

information.id = prompt("Nhập ID:");
information.name = prompt("Nhập tên:");
information.phone = prompt("Nhập số điện thoại:");
information.address = prompt("Nhập địa chỉ:");

document.write("Thông tin cá nhân:");
document.write("ID: " + information.id);
document.write("Tên: " + information.name);
document.write("Số điện thoại: " + information.phone);
document.write("Địa chỉ: " + information.address);
