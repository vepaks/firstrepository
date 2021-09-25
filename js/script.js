"use strict";

let question1 = prompt ('Как се казвате?');
let question2 = +prompt ('1исло?');
let question3 = prompt ('Как се казвате?');
let question4 = +prompt ('число?');

let answerDB = {
        age: {},
        name: {},
        single: {},

    };

answerDB.name.question1 [question1] = question2;
answerDB.name.question1 [question3] = question4;

switch (answerDB.name.question1) {
    case 'Alex':
        console.log ('OK!');
        break;
    case 'Max':
        console.log ('Onother Time');
        break;
        default: 
        console.log ('False');

}
console.log (answerDB);