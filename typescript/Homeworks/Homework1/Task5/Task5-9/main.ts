interface Person {
    id: number;
    name: string;
    age: number;
}
const people:Person[] = [
    { id: 1, name: "Andrii", age: 22 },
    { id: 2, name: "Olena", age: 25 },
    { id: 3, name: "Ihor", age: 28 },
    { id: 4, name: "Sofiia", age: 21 },
    { id: 5, name: "Maksym", age: 30 }
];

let writePeopleArray = (array:Person[]):void => {
    for (const person of array) {
        document.write(`<p>ID: ${person.id}. Name: ${person.name}. Age: ${person.age}</p>`);
    }
}
writePeopleArray(people);