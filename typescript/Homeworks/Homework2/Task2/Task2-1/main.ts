const form:HTMLFormElement | null = document.forms.namedItem('adultCheckForm')
if (form) {
    form.addEventListener('submit', (e:SubmitEvent):void => {
        e.preventDefault();
        const age:number = +form.age.value;
        if (!Number.isNaN(age) && age < 18) {
            console.log('You are under 18');
        }
    })
}
