var rect = require("./rectangle");

function getResult(l,b){
    console.log(`Calculating... length= ${l} and breadth = ${b}. `);

    if (l <=0 || b <=0 ){
        console.log("Dimensions should be greater than zero to calculate area or perimeter");
    }
    else {
        console.log(` The perimeter is ${rect.perimeter(l,b)} `);
        console.log(` The area is ${rect.area(l,b)} `);
    }
}

getResult(2,2);
getResult(-1,2);