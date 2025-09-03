let array = [true, 'gfdg', false, 123, false, 0, false, '345345', true, undefined];
for (const item of array) {
    if (typeof(item) === "number") {
        console.log(item);
    }
}