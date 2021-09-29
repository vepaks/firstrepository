'use strict';

const threes = {
    salim: 10,
    hasan: 20,
    ismail: 20,
    vedat: 30,
    Test: function () {
        console.log ('Test');
    }
}; 

console.log (Object.keys(threes).length );

for (let key in threes ) {
    console.log (key);
}

const { vedat, salim} = threes;
console.log ( vedat, salim ); 