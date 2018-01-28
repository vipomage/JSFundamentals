function ticketPrices(array ) {

    let title = array[0].toLowerCase();
    let day = array[1].toLowerCase();

    title = title.toLowerCase();
    day = day.toLowerCase();

    let movies = {
        'the godfather': {
            monday: 12,
            tuesday: 10,
            wednesday: 15,
            thursday: 12.50,
            friday: 15,
            saturday: 25,
            sunday: 30
        },
        'schindler\'s list': {
            monday: 8.50,
            tuesday: 8.50,
            wednesday: 8.50,
            thursday: 8.50,
            friday: 8.50,
            saturday: 15,
            sunday: 15
        },
        'casablanca': {
            monday: 8,
            tuesday: 8,
            wednesday: 8,
            thursday: 8,
            friday: 8,
            saturday: 10,
            sunday: 10
        },
        'the wizard of oz': {
            monday: 10,
            tuesday: 10,
            wednesday: 10,
            thursday: 10,
            friday: 10,
            saturday: 15,
            sunday: 15
        }
    };
    if ( movies.hasOwnProperty( title ) && movies[title].hasOwnProperty(day) ) {
        return movies[ title ][ day ]
    } else {
        return 'error'
    }
}

console.log( ticketPrices( ['The Godfather', 'Friday' ]) );
console.log( ticketPrices( ['casablanca', 'sunday' ]) );
console.log( ticketPrices( ['Schindler\'s LIST', 'monday'] ) );
console.log( ticketPrices( ['SoftUni', 'Nineday' ]) );


function makeLower(arg){
    for ( let i = 0; i < arg.length; i++ ) {
        if (arg.charCodeAt(i)>=65 && arg.charCodeAt(i)<=90) {
            arg = arg.replace('T','t');
            arg = arg.replace('','')
        }
        console.log(arg);
    }
    return arg
}