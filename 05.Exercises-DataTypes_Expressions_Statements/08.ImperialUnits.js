function imperialUnits( input ) {
    return `${Math.floor(input/12).toFixed(0)}\'-${(input%12)}\"`
}

console.log(imperialUnits(36));
console.log(imperialUnits(55));
console.log(imperialUnits(11));