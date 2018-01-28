function fruOrVeg( arg ) {
    let fruits  = ['banana','apple','kiwi','cherry','lemon','grapes','peach'];
    let veggies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];


    if (fruits.includes(arg)) {
        return 'fruit'
    }if (veggies.includes(arg)){
        return 'vegetable'
    }else{return 'unknown'}

}

console.log( fruOrVeg( 'banana' ) );
console.log( fruOrVeg( 'cucumber' ) );
console.log( fruOrVeg( 'pizza' ) );