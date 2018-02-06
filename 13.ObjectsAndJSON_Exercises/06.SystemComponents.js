function sysCompnnts(arr) {
    let summary = new Map();
    for (let lines of arr) {
        let [system, component, subComponent] = lines.split(' | ');

        if (!summary.has(system)) {
            summary.set(system, new Map());
        }
        if (!summary.get(system).has(component)) {
            summary.get(system).set(component, []);
        }

        summary.get(system).get(component).push(subComponent);
    }

    for (let [system, components] of [...summary].sort((a, b) => {
        //console.log(a[0]);
        //console.log(b[0]);
        return a > b
    })
        .sort((a, b) => {
            //console.log(a[1].size);
            //console.log(b[1].size);

            return a[1].size < b[1].size
        })) {
        console.log(system);
        for (let [component, subComponents] of components) {
            console.log(`|||${component}`);
            for (let subComps of subComponents) {
                console.log(`||||||${subComps}`);
            }
        }
    }
}

sysCompnnts([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'


]);

//100/100 Solution

function systemComponents(input) {
    let systems = new Map();
    input.forEach(row => {
        let [system, component, subcomponent] = row.split(' | ');
        if (!systems.has(system)) {
            systems.set(system, {});
        }
        if (!systems.get(system).hasOwnProperty(component)) {
            systems.get(system)[component] = [];
        }
        systems.get(system)[component].push(subcomponent)
    });
    let systemsSortedKeys = [...systems.keys()].sort(amountOfComponentsThenAlpabeticalSort);
    systemsSortedKeys.forEach(systemName => {
        console.log(systemName);
        let system = systems.get(systemName);
        let componentsSortedKeys = Object.keys(system).sort((a, b) => {
            return system[a].length < system[b].length
        });
        componentsSortedKeys.forEach(component => {
            console.log(`|||${component}`);
            system[component].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`)
            })
        })
    });

    function amountOfComponentsThenAlpabeticalSort(a, b) {
        if (Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1
            }
        } else {
            return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
        }

    }
}