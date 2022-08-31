const list = ['Leche', 'Aceite', 'Huevos', 'Harina', 'Pan'];
list.push('Aceite de Girasol');
list.pop();

const movies = [
    {title: 'El resplandor', director: 'Stanley Kubrick', date: new Date(1980, 11, 25)},
    {title: 'El señor de los anillos', director: 'Peter Jackson', date: new Date(2001, 11, 21)},
    {title: 'El origen', director: 'Christopher Nolan', date: new Date(2010, 6, 23)}
];

const newMovies = movies.filter(movie => movie.date > new Date(2010, 0, 1));
const directors = movies.map(movie => movie.director);
const titles = movies.map(movie => movie.title);
const titlesDirectors = directors.concat(titles);
const titlesDirectors2 = [...directors, ...titles];