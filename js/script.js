/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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