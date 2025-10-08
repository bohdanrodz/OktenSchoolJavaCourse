const form = document.forms.adultCheckForm;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = form.age.value;
    if (age < 18) {
        console.log('You are under 18');
    }
})