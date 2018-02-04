function heroicInventory(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        let hero = arr[i].split(/\//);

        obj["name"] = hero[0].toString().trim(" ");
        obj["level"] = Number(hero[1].trim(" "));
        if (hero.length === 3) {
            obj["items"] = hero[2].split(',').map(value => value.trim(" "));
        } else {
            obj["items"] = [];
        }
        output.push(obj)
    }
    return JSON.stringify(output)
}


console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));

console.log(heroicInventory([
    'Isacc / 25 ', //test for empty weapon list
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));