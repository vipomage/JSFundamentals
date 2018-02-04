function cappyJuice(arr) {
    let quantities = {};
    let output = {};
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let juice = obj.split(' => ')[0];
        let quantity = Number(obj.split(' => ')[1]);

        if (output.hasOwnProperty(juice)) {
            quantities[juice] += quantity;
            if (quantities[juice] >= 1000) {
                let bottles = Math.floor(quantities[juice] / 1000);
                output[juice] += bottles;
                quantities[juice] -= bottles * 1000;
            }
        } else {
            quantities[juice] = quantity;

            if (quantities[juice] >= 1000) {
                let bottles = Math.floor(quantities[juice] / 1000);
                output[juice] = bottles;
                quantities[juice] -= bottles * 1000;
            }
        }
    }
    for (juss in output) {
        console.log(`${juss} => ${output[juss]}`);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

cappyJuice([
    'Strawberry => 2643',
    'Strawberry => 367'
]);


function a(input) {

    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let i = 0; i < input.length; i++) {

        let current = input[i].split('=>');

        let fruit = current[0];
        let quantity = Number(current[1]);

        if (!totalJuice.has(fruit)) {
            totalJuice.set(fruit, 0);
        }
        let cuurentQuantity = totalJuice.get(fruit);
        cuurentQuantity += quantity;

        if (cuurentQuantity >= 1000) {
            let juiceLeft = cuurentQuantity % 1000;

            let bottlesToStore = (cuurentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(fruit)) {
                totalBottles.set(fruit, 0)
            }
            totalBottles.set(fruit, totalBottles.get(fruit) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity);

    }
    for (let [juicee, bottles]of totalBottles) {
        console.log(juicee + "=> " + bottles);
    }
}

a([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
a([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

a([
    'Strawberry => 2643',
    'Strawberry => 367'
]);