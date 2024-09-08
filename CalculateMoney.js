function CalculateMoney(num) {
    let DailyExpend = 500 + (8 * 50); // 500 + 400 = 900
    let total = (num * 120) - DailyExpend; // (num * 120) - 900
    return total;
}

let x = 20;
const result = CalculateMoney(x);
console.log(result); // Output: 1500
