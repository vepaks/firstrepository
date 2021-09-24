"use strict";


let answerDB = {
        age: {},
        name: {},
        single: {}

    };

let question1 = prompt ('Как се казвате?');
let question2 = prompt ('Как се казвате?');

answerDB.name [question1] = question2;

if (answerDB.name === 'Alex') {
        console.log ('Ok!');
} else {
        console.log ('Not OK!');
}