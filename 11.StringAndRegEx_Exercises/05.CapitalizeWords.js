function capitalizeWords(text) {
    let arr = text.split(' ').map(word => {
        let originalWord = word.toLowerCase();
        let charToReplace = originalWord[0];
        let replacement = originalWord[0].toUpperCase();

        originalWord = originalWord.replace(charToReplace, replacement);
        return originalWord
    });

    return arr.join(' ')
}


console.log(capitalizeWords('Capitalize these words'));
console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));