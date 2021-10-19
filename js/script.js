'use strict';

let answers = [],
    quetions = [
        'Как се казвате?',
        'На колко години сте?',
        'Каква е вашата фамиялия?'
    ];

// for (let i = 0; i < quetions.length; i++) {
//     answers[i] = prompt (quetions[i], '');
// }

let i = 0;
while (i < quetions.length ) {
answers[i] = prompt (quetions[i], ' ');
i++;
}

console.log (quetions);