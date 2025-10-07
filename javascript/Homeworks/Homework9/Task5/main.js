let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesContainer = document.createElement('div');
for (const course of coursesArray) {
    const courseDiv = document.createElement('div');
    const courseTitle = document.createElement('h2');
    courseTitle.innerText = `Course Title: "${course.title}"`;
    const durationsContainer = document.createElement('div');
    durationsContainer.classList.add('durations-container')
    const courseMonthDuration = document.createElement('p');
    courseMonthDuration.classList.add('month-duration')
    courseMonthDuration.innerText = `Month duration: ${course.monthDuration}`;
    const courseHourDuration = document.createElement('p');
    courseHourDuration.classList.add('hour-duration')
    courseHourDuration.innerText = `Hours Duration: ${course.hourDuration}`;
    durationsContainer.append(courseMonthDuration, courseHourDuration);
    const courseList = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        courseList.appendChild(li);
    }
    courseDiv.append(courseTitle, durationsContainer, courseList);
    const hr = document.createElement('hr');
    coursesContainer.append(courseDiv, hr);
}
document.body.appendChild(coursesContainer);