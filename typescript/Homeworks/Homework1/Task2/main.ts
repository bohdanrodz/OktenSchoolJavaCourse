let coursesAndDurationArray:{title:string, monthDuration:number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const course0 = coursesAndDurationArray[0];
if(course0 && course0.monthDuration > 5) {
    console.log('super!!!')
}
const course1 = coursesAndDurationArray[1];
if(course1 && course1['monthDuration'] > 5) {
    console.log('super!!!')
}
const course2 = coursesAndDurationArray[2];
if(course2 && course2.monthDuration > 5) {
    console.log('super!!!')
}
const course3 = coursesAndDurationArray[3];
if(course3 && course3.monthDuration > 5) {
    console.log('super!!!')
}
const course4 = coursesAndDurationArray[4];
if(course4 && course4.monthDuration > 5) {
    console.log('super!!!')
}
const course5 = coursesAndDurationArray[5];
if(course5 && course5.monthDuration > 5) {
    console.log('super!!!')
}