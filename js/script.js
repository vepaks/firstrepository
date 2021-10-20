'use strict';

function myFirstApp(name, age) {
    alert(`Здравейте, аз се казвам ${name} и това е моята първа  програма`);

    function showMySkils() {
        let skils = ["HTML", "CSS", "JS", ];
        // аз знам html

        console.log(`Аз знам ${skils[1]}`);

    }
    showMySkils();

    function checkAge() {
        if (age > 18) {
            console.log (`${name} имаш страхотни шансове да станеш FrondEndDev!`);  
        } else {
            console.log (`${name}, прекрасно е, че мислиш за своето бъдеще!`);
        }

        // age > 18 
        // имаш страховни условияя да станеш FrontEndDev

        // аге < 18 
        // Това е прекрасно, че мислиш за бъдещето!
    }
    checkAge();

    function calcPow(num) {
        console.log ((num*num));
        // Квадрат на число
    }
    calcPow (44);
}

myFirstApp('Алексадър', '36');