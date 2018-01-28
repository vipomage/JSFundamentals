function triangleArea( a,b,c ) {
    let semiP = (a+b+c)/2;
    return Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c))
}


console.log( triangleArea(2,3.5,4));