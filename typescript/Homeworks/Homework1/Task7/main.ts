export {};

declare global {
    interface Array<T> {
        myForEach(callback: (item: T, index: number, array: T[]) => void): void;
        myFilter(callback: (item: T, index: number, array: T[]) => boolean): T[];
    }
}

Array.prototype.myForEach = function<T>(
    this: T[],
    callback: (item:T,index:number,array:T[]) => void
): void {
    for (let index = 0; index < this.length; index++) {
        callback(this[index]!, index, this);
    }
}
let arr: number[] = [1,2,4]
arr.myForEach((item:any, index:number, array:any[]):void => console.log(item, index, array) );


Array.prototype.myFilter = function<T>(
    this: T[],
    callback:(item:T, index:number, array:T[]) => boolean
): T[]{
    let filteredArray:T[] = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index]!, index, this)) {
            filteredArray.push(this[index]!);
        }
    }
    return filteredArray;
}
console.log(arr.myFilter((item:any, index:number):boolean => index % 2 === 0));