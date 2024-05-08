let information = {
    id: "",
    name: "",
    phone: "",
    address: "",
};

delete information.address;
information.email = "";


document.write("Thông tin cá nhân:");
document.write("ID: " + information.id);
document.write("Tên: " + information.name);
document.write("Số điện thoại: " + information.phone);
document.write("Địa chỉ email" + information.email);
