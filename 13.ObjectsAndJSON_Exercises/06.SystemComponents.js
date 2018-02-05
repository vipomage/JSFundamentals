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

    for (let [system, components] of [...summary]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => a[1].size < b[1].size)) {
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