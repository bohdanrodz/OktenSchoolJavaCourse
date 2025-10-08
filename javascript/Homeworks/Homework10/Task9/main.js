const currentVisitTime = Date.now();
const value = document.getElementById('target');
value.innerText = localStorage.getItem('valueUAH') || 100;
const previousVisitTime = +localStorage.getItem('previousVisitTime');
if (previousVisitTime && currentVisitTime - previousVisitTime > 10000) {
    const newValue = +value.innerText + 10;
    value.innerText = newValue;
    localStorage.setItem('valueUAH', newValue)
}
localStorage.setItem('previousVisitTime', currentVisitTime);
