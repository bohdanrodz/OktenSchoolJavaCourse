Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}
arr = [1,2,4]
arr.myForEach((item, index, array) => console.log(item, index, array) );


Array.prototype.myFilter = function (callback) {
    let filteredArray = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            filteredArray.push(this[index]);
        }
    }
    return filteredArray;
}
console.log(arr.myFilter((item, index) => index % 2 === 0));