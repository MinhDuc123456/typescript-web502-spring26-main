console.log("typescript");

let myName: string = "hoadv";
const age: number = 36;
const isMarried: boolean= true;

  let isActive: boolean = true;
  let isLoading: boolean = false;
console.log(myName);
let count = 10;
// count = "20";

let product: {
    id : number; 
    title: string; 
    price: number;
    isActive: boolean; } = {
    id: 1,
    title: "Iphone 14",
    price: 2000,
    isActive: true,
};
// ## 4. Core Types: array
let numbers: number[] = [1, 2, 3, 4, 5, ];
let names: string[] = ["Alice", "Bob", "Charlie"];
let scores: Array<number> = [90, 85, 88];

// # 6. Special Types: any
let data: any = 10;
data = "Hello"; // Không lỗi
data = true; // Không lỗi

// ## 7. Type: Union và Literal Type
let result: number | string;
  result = 20; 
  result = "Success"; 
  







