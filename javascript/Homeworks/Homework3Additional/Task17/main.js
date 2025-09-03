let array = [];

// 1 a
for (let i = 0; i < 100; i += 2){
    array.push(i);
}


// 1 b
for (let i = 1; i <= 50; i++){
    array.push(i);
}


// 1 c
for (let i = 0; i < 20; i++){
    array.push(Math.floor(Math.random() * 100));
}


// 1 d
for (let i = 0; i < 20; i++){
    array.push(Math.floor(Math.random() * (725) ) + 8);
}


// 2

// for (let i = 2; i < array.length; i += 3) {
//     console.log(array[i]);
// }


// 3

// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 === 0){
//         console.log(array[i]);
//     }
// }


// 4

// let newArray = [];
// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//         newArray.push(array[i]);
//     }
// }


// 5

// for (let i = 0; i < array.length - 1; i++){
//     if (array[i+1] % 2 === 0){
//         console.log(array[i]);
//     }
// }


// 6

// let priceArray = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let price of priceArray) {
//     sum += price;
// }
// console.log(sum/priceArray.length);


// 7

// let array7 = [];
// let array8 = [];
// for (let i = 0; i < 10; i++){
//     array7.push(Math.floor(Math.random() * 100));
// }
// for (let number of array7) {
//     array8.push(number*5);
// }
// console.log(array8);


// 8

// let lalaArray = ['sdfsd',54645, '56756', 567, 0, 1, undefined, NaN, undefined, 123];
// let bibiArray = []
// for (let arrayElement of lalaArray) {
//     if (typeof (arrayElement) === 'number') {
//         bibiArray.push(arrayElement);
//     }
// }
// console.log(bibiArray);