/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt ("Колко филма вече изгледахте?");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

for (let i = 0; i <2; i++){
    let a = prompt ('Един от последните изгледани филми?', ''),
        b = prompt ('Каква оценка му поставяте?');
        if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length < 50 ) {
            personalMovieDB.movies [a] = b;
            console.log ('done');
            } else {
           console.log ('Error');
           i--; 
          }  
}

if (personalMovieDB.count < 10) {
    console.log ('Много малко филми!');
} else if (personalMovieDB.count < 10, personalMovieDB.count > 30) {
    console.log ('Добре');    
} else if (personalMovieDB.count > 30 ) {
    console.log ('Отлично!');
} else {
    console.log ('Грешка!');
}

console.log (personalMovieDB);


// Код возьмите из предыдущего домашнего задания