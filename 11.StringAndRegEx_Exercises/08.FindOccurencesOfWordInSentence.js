function findOccurencesOfWordInSentence(text, str) {
    let count = 0;
    let regex = new RegExp(`${str}\\b`, 'gmi');
    let match = regex.exec(text);

    while (match) {
        count++;
        match = regex.exec(text);
    }

    return count
}

console.log(findOccurencesOfWordInSentence('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(findOccurencesOfWordInSentence('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(findOccurencesOfWordInSentence('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));