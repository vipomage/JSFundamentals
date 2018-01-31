function printLetters(arg) {
    let num = 0;
    for (char of arg) {
        console.log(`str[${num}] -> ${char}`);
        num++;
    }
}


printLetters('Hello, World!');
printLetters('SoftUni');