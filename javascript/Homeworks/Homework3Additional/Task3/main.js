let array = [2,17,13,6,22,31,45,66,100,-18];

// 1
console.log('[t1] with while');
let i = 0;
while (i < array.length){
    console.log(array[i]);
    i++
}

// 2
console.log('[t2] with for');
for (const item of array){
    console.log(item)
}

// 3
console.log('[t3] odd indexes with while');
i = 0;
while (i < array.length){
    if (i % 2 === 1){
        console.log(array[i]);
    }
    i++
}

// 4
console.log('[t4] odd indexes with for');
for (let i = 0; i < array.length; i++){
    if (i % 2 === 1){
        console.log(array[i]);
    }
}

// 5
console.log('[t5] even values with while');
i = 0;
while (i < array.length){
    if (array[i] % 2 === 0){
        console.log(array[i]);
    }
    i++;
}

// 6
console.log('[t6] even values with for');
for (const item of array){
    if (item % 2 === 0){
        console.log(item);
    }
}

// 7
console.log('[t7] replace every multiple of 3 with "okten"');
let array1 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < array1.length; i++){
    if (array1[i] % 3 === 0){
        array1[i] = 'okten'
    }
}
console.log(array1);

// 8
console.log('[t8] display the array in reverse order');
for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}
// маю питання: краще так писати як зараз написано чи писати звичайний цикл від 0 до кінця масиву і просто виводити array[array.length - i - 1]?


// 9.1
console.log('[t9.1] reverse order of task 1');
i = array.length - 1;
while (i >= 0){
    console.log(array[i]);
    i--
}

// 9.2
console.log('[t9.2] reverse order of task 2');
for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

// 9.3
console.log('[t9.3] reverse order of task 3');
i = array.length - 1;
while (i >= 0){
    if (i % 2 === 1){
        console.log(array[i]);
    }
    i--
}

// 9.4
console.log('[t9.4] reverse order of task 4');
for (let i = array.length - 1; i >= 0; i--){
    if (i % 2 === 1){
        console.log(array[i]);
    }
}

// 9.5
console.log('[t9.5] reverse order of task 5');
i = array.length - 1;
while (i >= 0){
    if (array[i] % 2 === 0){
        console.log(array[i]);
    }
    i--;
}

// 9.6
console.log('[t9.6] reverse order of task 6');
for (let i = array.length -1; i >=0; i--){
    if (array[i] % 2 === 0){
        console.log(array[i]);
    }
}

// 9.7
console.log('[t9.7] reverse order of task 7');
let array2 = [2,17,13,6,22,31,45,66,100,-18];
for (let i = array2.length - 1; i >= 0; i--){
    if  (array2[i] % 3 === 0){
        array2[i] = 'okten';
    }
    console.log(array2[i]);
}


