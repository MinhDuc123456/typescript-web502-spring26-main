"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var averageScore = function (scores) {
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
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
    return "T\u00EAn: ".concat(name, ", Tu\u1ED5i: ").concat(age !== null && age !== void 0 ? age : "Chưa cập nhật", ", Vai tr\u00F2: ").concat(role);
};
console.log(createUser("Đức", 20, "Admin"));
console.log(createUser("An"));
console.log(createUser("Bình", 22));
var handleProducts = function (mainProduct) {
    var otherProducts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherProducts[_i - 1] = arguments[_i];
    }
    return __spreadArray([
        __assign({}, mainProduct)
    ], otherProducts, true);
};
// Test
var productA = { name: "SP A", price: 100 };
var productB = { name: "SP B", price: 200 };
var productC = { name: "SP C", price: 300 };
console.log(handleProducts(productA, productB, productC));
