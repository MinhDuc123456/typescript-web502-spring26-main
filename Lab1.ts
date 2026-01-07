// Lab1.ts

// 1️⃣ Hàm trả về chu vi và diện tích hình chữ nhật
function rectangleMetrics(length: number, width: number): { perimeter: number; area: number } {
    const perimeter = 2 * (length + width);
    const area = length * width;
    return { perimeter, area };
}

// 2️⃣ Hàm tính tổng nhiều số (rest parameter)
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 3️⃣ Hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function countChar(str: string, char: string): number {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

// 4️⃣ Hàm kiểm tra số nguyên tố
function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// =========================
// Test các hàm
console.log(rectangleMetrics(5, 3));        // { perimeter: 16, area: 15 }
console.log(sumNumbers(1, 2, 3, 4, 5));    // 15
console.log(countChar("hello world", "l"));// 3
console.log(isPrime(17));                  // true
console.log(isPrime(18));                  // false
