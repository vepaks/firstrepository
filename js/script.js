/* Задача:

1) Създайте променлива numberOfFilms и задайте въпрос на потребителя: 
'Колко филма ве изгледахте?'

2) Създайте обект personalMovieDB и в него сложете такива свойства:
    - count - тук поставете отговора на първият въпрос
    - movies - тук поставете празен обект
    - actors - също празен обект
    - genres - тук поставете празен масив
    - privat - а тук поставете boolean(логическо) значение false

3) Задайте по два въпроса на потребителя:
    - 'Един от последните изгледани филма?'
    - 'Каква оценка му поставяте?'
отговорите трябва да ги поставите в отделни променливи
Запишете отговорите на четерте въпроса в обекта movies във формат: 
    movies: {
        'logan': '8.1'
    }

Проверете дали всичко работи в конзолата */

'use strict';

let numberOfFilms = +prompt ("Колко филма вече изгледахте?");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

let question1 = prompt ("Един от последните изгледани филми?" );
let b = +prompt ("Каква оценка му поставяте?"); 
let c = prompt ("Един от последните изгледани филми?");
let d = +prompt ('Каква оценка му поставяте?');

personalMovieDB.movies [question1] = b;
personalMovieDB.movies [c] = d;

console.log (personalMovieDB);

