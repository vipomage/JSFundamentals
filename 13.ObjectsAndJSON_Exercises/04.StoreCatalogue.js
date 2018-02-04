function storeCatalogue(arr) {
    let catalogue = new Map;
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(' : ')[0].trim(' ');
        let value = arr[i].split(' : ')[1];
        catalogue.set(name, Number(value));

    }
    let letter = '';
    for (item of [...catalogue].sort()) {
        if (letter !== item[0][0]) {
            letter = item[0][0];
            console.log(letter);
        }
        console.log('  ' + item[0] + ': ' + catalogue.get(item[0]));
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);