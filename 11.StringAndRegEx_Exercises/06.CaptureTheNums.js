function captureNums(arr) {
    let nums = [];
    let regex = /\d+/g;
    let text = arr.join(' ');

    let match = regex.exec(text);

    while (match) {
        nums.push(match[0]);
        match = regex.exec(text)
    }
    return nums.join(' ')
}


console.log(captureNums(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));
