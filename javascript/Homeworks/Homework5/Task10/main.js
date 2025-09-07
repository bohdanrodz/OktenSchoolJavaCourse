let findMinimalValue = (array) => {
    let minimalValue = array[0];
    for (const number of array) {
        if (number < minimalValue) {
            minimalValue = number;
        }
    }
    return minimalValue;
}
console.log(findMinimalValue([1, 2, 3, 4, -1, 6]));