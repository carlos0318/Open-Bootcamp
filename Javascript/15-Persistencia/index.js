let name = 'Carlos';
let lastName = 'Ortega';
const person = {
    name,
    lastName
};

sessionStorage.setItem('person', JSON.stringify(person));
localStorage.setItem('person', JSON.stringify(person));

const now = new Date()
document.cookie = `person=${JSON.stringify(person)};expires=${new Date(now.getTime() + 2 * 60000).toUTCString()}`;