function autoEngCompany(arr) {
    let map = new Map;
    for (car of arr) {
        let make = car.split(' | ')[0];
        let model = car.split(' | ')[1];
        let qntyt = car.split(' | ')[2];

        if (map.has(make)) {
            let key = map.get(make);
            let found = false;
            for (models of key) {
                if (models['model'] === model) {
                    found = true;
                    models['qty'] += Number(qntyt)
                }
            }
            if (!found && models['model'] !== model) {
                key.push({model: model, qty: Number(qntyt)})
            }
        } else {
            map.set(make, [{model: model, qty: Number(qntyt)}]);
        }
    }
    for (set of map) {
        console.log(set[0]);
        for (model of set[1]) {
            console.log(`###${model['model']} -> ${model['qty']}`);
        }
    }
}

// autoEngCompany([
//     'Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10'
// ]);

autoEngCompany([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]);
