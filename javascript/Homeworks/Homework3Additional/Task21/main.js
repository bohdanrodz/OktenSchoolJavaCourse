let array = ['a', 'b', 'c'];
let word = '';

// with for
for (let i = 0; i < array.length; i++) {
    word += array[i];
}
console.log(word);


// with while
word = '';
let i = 0;
while (i < array.length) {
    word += array[i];
    i++;
}
console.log(word);

// with for of
word = '';
for (let arrayElement of array) {
    word += arrayElement;
}
console.log(word);