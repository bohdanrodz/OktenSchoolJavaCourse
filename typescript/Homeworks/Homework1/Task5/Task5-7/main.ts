let createList = (text:string, count:number):void => {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createList('bimbimbim', 3)