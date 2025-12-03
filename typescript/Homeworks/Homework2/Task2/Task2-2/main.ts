const currentVisitTime:number = Date.now();
const value:HTMLElement | null = document.getElementById('target');
if (value) {
    value.innerText = String(localStorage.getItem('valueUAH') || 100);
    const previousVisitTime:string | null = localStorage.getItem('previousVisitTime');
    if (previousVisitTime && currentVisitTime - Number(previousVisitTime) > 10000) {
        const newValue:number = +value.innerText + 10;
        value.innerText = String(newValue);
        localStorage.setItem('valueUAH', String(newValue));
    }
    localStorage.setItem('previousVisitTime', String(currentVisitTime));

}
