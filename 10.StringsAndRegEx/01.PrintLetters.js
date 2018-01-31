function printLetters(arg) {
    let num = 0;
    for (char of arg) {
        console.log(`str[${num}] -> ${arg[num]}`);
        num++;
    }
}


printLetters('Hello, World!');
printLetters('SoftUni');