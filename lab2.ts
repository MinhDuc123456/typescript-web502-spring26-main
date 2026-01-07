"use strict";


var Rate;
(function (Rate) {
    Rate["low"] = "Thấp";
    Rate["medium"] = "Trung bình";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));


var listProducts = [
    { name: 'Sản phẩm A', price: 3, sale: true, rate: Rate.low },
    { name: 'Sản phẩm B', price: 6, sale: false, rate: Rate.medium },
    { name: 'Sản phẩm C', price: 10, sale: true, rate: Rate.hight },
    { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
    { name: 'Sản phẩm E', price: 8, sale: false, rate: Rate.hight }
];


var addDescription = function (products) {
    return products.map(function (product) {
        return Object.assign(Object.assign({}, product), { description: product.price > 5 ? 'Tốt' : 'Bình thường' });
    });
};

var productsWithDescription = addDescription(listProducts);


var showProducts = function (products) {
    products.forEach(function (product) {
        console.log("San Pham A: ".concat(product.name, ", Gia San Pham: ").concat(product.price, ", Sale: ").concat(product.sale, ", Danh Gia: ").concat(product.rate));
    });
};


var totalPrice = function (products) {
    return products.reduce(function (total, product) {
        return total + product.price;
    }, 0);
};


var filterSaleProducts = function (products) {
    return products.filter(function (product) {
        return product.sale === true &&
            (product.rate === Rate.medium || product.rate === Rate.hight);
    });
};


console.log('--- Danh sách sản phẩm ---');
showProducts(listProducts);

console.log('--- Tổng giá bán ---');
console.log(totalPrice(listProducts));

console.log('--- Sản phẩm Sale & đánh giá >= Trung bình ---');
console.log(filterSaleProducts(listProducts));

console.log('--- Sản phẩm có description ---');
console.log(productsWithDescription);
