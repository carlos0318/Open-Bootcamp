const info = {
    name: 'Carlos',
    lastName: 'Ortega',
    age: 24,
    height: 164,
    isDeveloper: true
}

const age = info.age;

const list = [
    {
        ...info
    },
    {
        name: 'Alexander',
        lastName: 'Villar',
        age: 25,
        height: 170,
        isDeveloper: false
    },
    {
        name: 'Guillermo',
        lastName: 'Mejia',
        age: 24,
        height: 170,
        isDeveloper: true
    }
];

const sortList = list.sort((a, b) => b.age - a.age);
console.log(sortList);
