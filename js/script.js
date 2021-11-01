/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {

        personalMovieDB.count = +prompt('Колко филма изгледахте?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Колко филма изгледахте?', '');

        }

    },

    RememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Един от последните изгледани филми?', ''),
                b = prompt('Каква оценка му поставяте?');
            if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }
        }


    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Много малко филми!');
        } else if (personalMovieDB.count < 10 && personalMovieDB.count > 30) {
            console.log('Добре');
        } else if (personalMovieDB.count > 30) {
            console.log('Отлично!');
        } else {
            console.log('Грешка!');
        }
    },
    showMyDB: function (bou) {
        if (!bou) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Вашият любим жанр под номер ${i}`);

            if (genre === '' || genre === null) {
                console.log('Въвели сте нокоректни дании или не сте въвели данни');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Вашият любим жанр под номер ${i +1} e ${item}`);
        });

    }

};