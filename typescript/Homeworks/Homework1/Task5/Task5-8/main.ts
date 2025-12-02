let createListByArray = (array:any[]):void => {
    document.write('<ul>')
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}
createListByArray([1,'hello', true, false, '123'])