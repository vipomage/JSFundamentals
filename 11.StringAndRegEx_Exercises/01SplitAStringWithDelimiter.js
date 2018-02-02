function splitStringWithDelimiter(text, delimiter) {
    return text.split(`${delimiter}`).join('\n')
}


console.log(splitStringWithDelimiter('One-Two-Three-Four-Five', '-'));
console.log(splitStringWithDelimiter('http://platform.softuni.bg', '.'));