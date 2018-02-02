function findVariables(text) {
    let output = [];
    text = text.replace('__', '');// FUCK
    let strings = text.split(' ');// FUCK
    const regex = /^(\_\w+)$/gm; // FU REGEX it doesnt catch single underscore

    for (let i = 0; i < strings.length; i++) {// FUCK
        let anotherFker = strings[i]; // FUCK
        if (strings[i].match(regex) && anotherFker[0] === "_" && anotherFker[anotherFker.length - 1] !== "_") {// FUCK
            let fker = strings[i][0];// FUCK
            let temp = strings[i];// FUCK
            output.push(temp.replace('_', ''));// FUCK
        }
    }
    return output.join(',')
}

console.log(findVariables('The _id and _age variables are both integers.'));
console.log(findVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));
console.log(findVariables('Calculate the _area of the _perfectRectangle object.'));