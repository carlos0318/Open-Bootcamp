let date = new Date();

let dateBirth = new Date(1998, 06, 25);

let isLate = date > dateBirth;

let dayBirth = dateBirth.getDate();
let monthBirth = dateBirth.getMonth() + 1;
let yearBirth = dateBirth.getFullYear();