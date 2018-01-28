function sumNdVat(arg){
    let sum =0;
    for ( let i = 0; i < arg.length; i++ ) {
        sum += arg[i];
    }
    let vat = sum*0.2;
    let total = vat+sum;
    return `sum = ${sum}\r\nVAT = ${vat}\r\ntotal = ${total}`
}


console.log(sumNdVat([1.20,2.60,3.50]));