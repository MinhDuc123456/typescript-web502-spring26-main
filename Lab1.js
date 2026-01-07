// Lab1.js

function rectangleMetrics(length, width) {
    const perimeter = 2 * (length + width);
    const area = length * width;
    return { perimeter, area };
}

function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function countChar(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Test
console.log(rectangleMetrics(5, 3));
console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(countChar("hello world", "l"));
console.log(isPrime(17));
console.log(isPrime(18));
