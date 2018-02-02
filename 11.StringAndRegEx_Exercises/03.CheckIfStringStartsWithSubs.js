function checkStartOfString(text, substr) {
    return text.includes(substr);
}

console.log(checkStartOfString('How have you been?', 'how'));
console.log(checkStartOfString('The quick brown fox…', 'The quick brown fox…'));
console.log(checkStartOfString('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));