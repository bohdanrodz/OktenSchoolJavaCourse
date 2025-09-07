let swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
console.log(swap([11,22,33,44],0,1) )