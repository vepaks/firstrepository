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


console.log (Object.keys (threes));


function Hello () {
    console.log ("1");
    console.log ("2");
    console.log ("3");
    console.log ("4");
    console.log ("5");
    console.log ("6");
    console.log ("7");
    console.log ("8");
    console.log ("9");
    console.log ("10");

}