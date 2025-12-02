let findMinimalValue = (array: number[]): number | undefined => {
    if (array.length === 0) return undefined;
    let minimalValue = array[0];
    for (const number of array) {
        if (minimalValue && number < minimalValue) {
            minimalValue = number;
        }
    }
    return minimalValue;
}
console.log(findMinimalValue([1, 2, 3, 4, -1, 6]));