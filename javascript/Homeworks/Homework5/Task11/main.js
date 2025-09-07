let sumArray = (array) => {
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));