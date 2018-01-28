function upperCase( arg ) {
    const regex = /[ .?,!]/g;
    return arg.toUpperCase().replace(regex,'/').replace(' ').split('').join(', ');
}

console.log( upperCase('Hi, how are you?') );
console.log( upperCase('hello') );
console.log( upperCase('Functions in JS can be nested, i.e. hold other functions') );