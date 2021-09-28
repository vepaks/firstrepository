/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start () {

    numberOfFilms = +prompt ('Колко филма изгледахте?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
    numberOfFilms = +prompt ('Колко филма изгледахте?', '');

    }

}

start();


const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

function RememberMyFilms () {
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
    
}

//RememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Много малко филми!');
    } else if (personalMovieDB.count < 10, personalMovieDB.count > 30) {
        console.log ('Добре');    
    } else if (personalMovieDB.count > 30 ) {
        console.log ('Отлично!');
    } else {
        console.log ('Грешка!');
    }
}
//detectPersonalLevel ();

function showMyDB (bou) {
    if (!bou) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function whriteYourGenderes () {
        for (let i = 1; i < 4; i++){
           personalMovieDB.genres [i - 1] = prompt ('Вашият любим жанр под номер ${1}');        
        } 

}
whriteYourGenderes ();


