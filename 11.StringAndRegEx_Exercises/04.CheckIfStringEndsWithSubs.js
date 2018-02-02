function checkStartOfString(text, substr) {
    return text.includes(substr);
}

console.log(checkStartOfString('This sentence ends with fun?', 'fun?'));
console.log(checkStartOfString('This is Houston, we have…', 'We have…'));
console.log(checkStartOfString('The new iPhone has no headphones jack.', 'o headphones jack.'));