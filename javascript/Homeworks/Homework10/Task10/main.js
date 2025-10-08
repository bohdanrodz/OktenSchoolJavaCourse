const buttons = document.getElementsByTagName('button');
const prev = buttons[0];
const next = buttons[1];
const people = [
    { name: "John", surname: "Smith" },
    { name: "Emma", surname: "Johnson" },
    { name: "Liam", surname: "Williams" },
    { name: "Olivia", surname: "Brown" },
    { name: "Noah", surname: "Jones" },
    { name: "Ava", surname: "Garcia" },
    { name: "William", surname: "Miller" },
    { name: "Sophia", surname: "Davis" },
    { name: "James", surname: "Rodriguez" },
    { name: "Isabella", surname: "Martinez" },
    { name: "Benjamin", surname: "Hernandez" },
    { name: "Mia", surname: "Lopez" },
    { name: "Lucas", surname: "Gonzalez" },
    { name: "Charlotte", surname: "Wilson" },
    { name: "Henry", surname: "Anderson" },
    { name: "Amelia", surname: "Thomas" },
    { name: "Alexander", surname: "Taylor" },
    { name: "Harper", surname: "Moore" },
    { name: "Michael", surname: "Jackson" },
    { name: "Evelyn", surname: "Martin" },
    { name: "Daniel", surname: "Lee" },
    { name: "Abigail", surname: "Perez" },
    { name: "Matthew", surname: "Thompson" },
    { name: "Emily", surname: "White" },
    { name: "Joseph", surname: "Harris" },
    { name: "Ella", surname: "Sanchez" },
    { name: "David", surname: "Clark" },
    { name: "Elizabeth", surname: "Ramirez" },
    { name: "Jackson", surname: "Lewis" },
    { name: "Sofia", surname: "Robinson" },
    { name: "Sebastian", surname: "Walker" },
    { name: "Avery", surname: "Young" },
    { name: "Carter", surname: "Allen" },
    { name: "Scarlett", surname: "King" },
    { name: "Wyatt", surname: "Wright" },
    { name: "Grace", surname: "Scott" },
    { name: "Jayden", surname: "Torres" },
    { name: "Chloe", surname: "Nguyen" },
    { name: "Jack", surname: "Hill" },
    { name: "Victoria", surname: "Flores" },
    { name: "Luke", surname: "Green" },
    { name: "Riley", surname: "Adams" },
    { name: "Levi", surname: "Nelson" },
    { name: "Aria", surname: "Baker" },
    { name: "Owen", surname: "Hall" },
    { name: "Lily", surname: "Rivera" },
    { name: "Gabriel", surname: "Campbell" },
    { name: "Hannah", surname: "Mitchell" },
    { name: "Julian", surname: "Carter" },
    { name: "Zoey", surname: "Roberts" },
    { name: "Hudson", surname: "Gomez" },
    { name: "Nora", surname: "Phillips" },
    { name: "Samuel", surname: "Evans" },
    { name: "Camila", surname: "Turner" },
    { name: "David", surname: "Diaz" },
    { name: "Layla", surname: "Parker" },
    { name: "Eli", surname: "Cruz" },
    { name: "Penelope", surname: "Edwards" },
    { name: "Anthony", surname: "Collins" },
    { name: "Lillian", surname: "Stewart" },
    { name: "Isaac", surname: "Morris" },
    { name: "Zoey", surname: "Morales" },
    { name: "Dylan", surname: "Murphy" },
    { name: "Eleanor", surname: "Cook" },
    { name: "Lincoln", surname: "Rogers" },
    { name: "Hazy", surname: "Gutierrez" },
    { name: "Asher", surname: "Ortiz" },
    { name: "Stella", surname: "Morgan" },
    { name: "Christopher", surname: "Cooper" },
    { name: "Natalie", surname: "Peterson" },
    { name: "Josiah", surname: "Bailey" },
    { name: "Hazel", surname: "Reed" },
    { name: "Andrew", surname: "Kelly" },
    { name: "Violet", surname: "Howard" },
    { name: "Thomas", surname: "Ramos" },
    { name: "Aurora", surname: "Kim" },
    { name: "Joshua", surname: "Cox" },
    { name: "Savannah", surname: "Ward" },
    { name: "Ezra", surname: "Richardson" },
    { name: "Addison", surname: "Watson" },
    { name: "Charles", surname: "Brooks" },
    { name: "Lucy", surname: "Chavez" },
    { name: "Caleb", surname: "Wood" },
    { name: "Aubrey", surname: "James" },
    { name: "Christian", surname: "Bennett" },
    { name: "Ellie", surname: "Gray" },
    { name: "Hunter", surname: "Mendoza" },
    { name: "Paisley", surname: "Ruiz" },
    { name: "Eli", surname: "Hughes" },
    { name: "Audrey", surname: "Price" },
    { name: "Jonathan", surname: "Alvarez" },
    { name: "Brooklyn", surname: "Castillo" },
    { name: "Connor", surname: "Sanders" },
    { name: "Bella", surname: "Patel" },
    { name: "Isaiah", surname: "Myers" },
    { name: "Claire", surname: "Long" },
    { name: "Aaron", surname: "Ross" },
    { name: "Skylar", surname: "Foster" },
    { name: "Ezekiel", surname: "Jimenez" },
    { name: "Savannah", surname: "Powell" }
];
const div = document.getElementById('object-wrapper');
let j = 0
window.onload = () => {
    for (let i = 0; i < 10; i++) {
        const object = document.createElement('p');
        object.innerText = `${i+1}. Name: ${people[i].name}. Surname: ${people[i].surname}.`
        div.appendChild(object);
    }
}
next.onclick = () => {
    j++;
    if (j > 9) {
        j=0
    }
    div.innerText = ''
    for (let i = 0; i < 10; i++) {
        const object = document.createElement('p');
        object.innerText = `${i+1+j*10}. Name: ${people[i+j*10].name}. Surname: ${people[i+j*10].surname}.`
        div.appendChild(object);
    }
}
prev.onclick = () => {
    j += -1;
    if (j < 0) {
        j=9
    }
    div.innerText = ''
    for (let i = 0; i < 10; i++) {
        const object = document.createElement('p');
        object.innerText = `${i+1+j*10}. Name: ${people[i+j*10].name}. Surname: ${people[i+j*10].surname}.`
        div.appendChild(object);
    }
}
