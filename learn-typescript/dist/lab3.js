"use strict";


var averageScore = function (scores) {
    var total = scores.reduce(function (sum, score) {
        return sum + score;
    }, 0);
    return scores.length > 0 ? total / scores.length : 0;
};
console.log("Điểm trung bình:", averageScore([8, 7, 9]));


var isEven = function (num) {
    return num % 2 === 0;
};
console.log("10 là số chẵn?", isEven(10));
console.log("7 là số chẵn?", isEven(7));


var createUser = function (name, age, role) {
    if (role === void 0) { role = "User"; }
    return "Tên: ".concat(name, ", Tuổi: ").concat(age !== null && age !== void 0 ? age : "Chưa cập nhật", ", Vai trò: ").concat(role);
};
console.log(createUser("Đức", 20, "Admin"));
console.log(createUser("An"));
console.log(createUser("Bình", 22));


var handleProducts = function (mainProduct) {
    var otherProducts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherProducts[_i - 1] = arguments[_i];
    }
    return [{ ...mainProduct }].concat(otherProducts);
};

console.log(handleProducts(
    { name: "SP A", price: 100 },
    { name: "SP B", price: 200 },
    { name: "SP C", price: 300 }
));
