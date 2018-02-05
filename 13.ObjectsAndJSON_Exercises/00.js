function cityMarkets(strArr) {
    let summary = new Map();

    for (let row of strArr) {
        let [town, product, sales] = row.split(' -> ');
        sales = sales.split(' : ')[0] * sales.split(' : ')[1];
        //Verify town exists
        if (!summary.has(town)) {
            summary.set(town, new Map());
        }
        //Verify product exists
        if (!summary.get(town).has(product)) {
            summary.get(town).set(product, 0);
        }
        let oldSales = summary.get(town).get(product);
        summary.get(town).set(product, oldSales + sales);
    }
    for (let [town, products] of summary) {
        console.log(`Town - ${town}`);
        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`);
        }
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Montana -> Oranges -> 200000 : 1',
    'Montana -> Cherries -> 1000 : 0.3'
]);