"use strict";



const averageScore = (scores: number[]): number => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return scores.length > 0 ? total / scores.length : 0;
};


console.log("Điểm trung bình:", averageScore([8, 7, 9]));



type CheckNumber = (num: number) => boolean;

const isEven: CheckNumber = (num) => {
    return num % 2 === 0;
};


console.log("10 là số chẵn?", isEven(10));
console.log("7 là số chẵn?", isEven(7));




const createUser = (
    name: string,
    age?: number,
    role: string = "User"
): string => {
    return `Tên: ${name}, Tuổi: ${age ?? "Chưa cập nhật"}, Vai trò: ${role}`;
};


console.log(createUser("Đức", 20, "Admin"));
console.log(createUser("An"));
console.log(createUser("Bình", 22));




interface Product {
    name: string;
    price: number;
}

const handleProducts = (
    mainProduct: Product,
    ...otherProducts: Product[]
): Product[] => {
    return [
        { ...mainProduct },
        ...otherProducts
    ];
};

// Test
const productA: Product = { name: "SP A", price: 100 };
const productB: Product = { name: "SP B", price: 200 };
const productC: Product = { name: "SP C", price: 300 };

console.log(handleProducts(productA, productB, productC));
