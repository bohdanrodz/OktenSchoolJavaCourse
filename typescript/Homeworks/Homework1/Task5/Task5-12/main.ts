let swap = (array:any[], index1:number, index2:number):any[] => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
console.log(swap([11,22,33,44],0,1) )