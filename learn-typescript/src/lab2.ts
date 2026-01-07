
enum Rate {
    low = 'Thấp',
    medium = 'Trung bình',
    hight = 'Cao'
}


type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
};


let listProducts: Product[] = [
    { name: 'Sản phẩm A', price: 3, sale: true, rate: Rate.low },
    { name: 'Sản phẩm B', price: 6, sale: false, rate: Rate.medium },
    { name: 'Sản phẩm C', price: 10, sale: true, rate: Rate.hight },
    { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
    { name: 'Sản phẩm E', price: 8, sale: false, rate: Rate.hight }
];


const addDescription = (products: Product[]) => {
    return products.map(product => ({
        ...product,
        description: product.price > 5 ? 'Tốt' : 'Bình thường'
    }));
};

const productsWithDescription = addDescription(listProducts);


const showProducts = (products: Product[]) => {
    products.forEach(product => {
        console.log(
            `Tên: ${product.name}, Giá: ${product.price}, Sale: ${product.sale}, Đánh giá: ${product.rate}`
        );
    });
};


const totalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
};


const filterSaleProducts = (products: Product[]) => {
    return products.filter(
        product =>
            product.sale === true &&
            (product.rate === Rate.medium || product.rate === Rate.hight)
    );
};


console.log('--- Danh sách sản phẩm ---');
showProducts(listProducts);

console.log('--- Tổng giá bán ---');
console.log(totalPrice(listProducts));

console.log('--- Sản phẩm Sale & đánh giá >= Trung bình ---');
console.log(filterSaleProducts(listProducts));

console.log('--- Sản phẩm có description ---');
console.log(productsWithDescription);
