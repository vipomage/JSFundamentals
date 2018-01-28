function htmlImageTag( arr ) {
    return `<img src="${arr[0]}" alt="${arr[1]}">`
}

console.log(htmlImageTag(['smiley.gif', 'Smiley Face']));