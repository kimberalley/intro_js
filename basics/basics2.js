function numberToDigits(num) {
    return num
        .toString()
        .split("")
        .map(Number);
}

const number = 4396;
const digits = numberToDigits(number);
console.log(digits);