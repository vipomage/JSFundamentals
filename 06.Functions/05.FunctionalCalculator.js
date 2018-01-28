function fCalculator( input1, input2, operator ) {
    switch (operator){
        case '+':return Number(input1) + Number(input2);
        case '*':return Number(input1) * Number(input2);
        case '/':return Number(input1) / Number(input2);
        case '-':return Number(input1) - Number(input2);
        case '%':return Number(input1) % Number(input2);
    }
}


console.log( fCalculator( 2, 4, '-'));