'use strict';

function first (lang, callback) {
    console.log ( `${lang}` );
    callback ();

}

first (1, function (){
    console.log (2);
    } ); 


