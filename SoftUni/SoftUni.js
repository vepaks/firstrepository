

function Zoo (imput) {
     let dogFoodPrice = Number(2.5),
         catFoodPrice = Number(4),
         countDogsFood = Number(imput[0]),
         countCatsFood = Number(imput[1]),
         finalSum = ((dogFoodPrice*countDogsFood) + (catFoodPrice*countCatsFood));
                
     console.log (`${finalSum} lv.`);
}

Zoo ([5, 4]);

function Greenland (imput) {
    let square = Number(imput[0]),
        workPrice = 7.61,
        price = Number(square*workPrice),
        discount = Number(price*0.18),
        finalSum = Number(price-discount);
        
    console.log (`The final price is: ${finalSum} lv.`);
    console.log (`The discount is: ${discount} lv.`);
}


Greenland ([550]);