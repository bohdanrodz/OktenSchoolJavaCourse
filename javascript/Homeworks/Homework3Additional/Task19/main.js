let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * (100)));
}
for (const arrayElement of array) {
    if (arrayElement % 2 === 0){
        console.log(arrayElement);
    }
}
console.log(array);
