function BinaryNumberCount(str) {
    let cnt = 0;
    for (let element of str) {
        if (element === '0') {
            cnt++;
        }
    }
    return cnt;
}

let string = '001101011';
let result = BinaryNumberCount(string);
console.log(result);
