function buildDatabase(systemsAndComponents) {
    let system = {};

    for (const components of systemsAndComponents) {
        let [systemName, componentName, subComponentName] = components.split(' | ');
        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {};
        }

        if (!system[systemName].hasOwnProperty(componentName)) {
            system[systemName][componentName] = [];
            system[systemName][componentName].push(subComponentName);
        } else {
            system[systemName][componentName].push(subComponentName);
        }
    }
    let objKeysOrdered = Object.keys(system).sort((a, b) => a.localeCompare(b)).sort(function(a, b) {
        return Object.keys(system[b]).length - Object.keys(system[a]).length;
    });

    for (const key of objKeysOrdered) {
        if (system.hasOwnProperty(key)) {
            console.log(key);
            let orderedComponents = Object.keys(system[key]).sort((a, b) => { return system[key][b].length - system[key][a].length })
            for (const component of orderedComponents) {
                if (system[key].hasOwnProperty(component)) {
                    console.log("|||" + component);

                    for (const iterator of system[key][component]) {

                        console.log("||||||" + iterator);
                    }
                }
            }
        }
    }
}

// buildDatabase([ 'SULS | Main Site | Home Page',
// 'SULS | Main Site | Login Page',
// 'SULS | Main Site | Register Page',
// 'SULS | Judge Site | Login Page',
// 'SULS | Judge Site | Submittion Page',
// 'Lambda | CoreA | A23',
// 'SULS | Digital Site | Login Page',
// 'Lambda | CoreB | B24',
// 'Lambda | CoreA | A24',
// 'Lambda | CoreA | A25',
// 'Lambda | CoreC | C4',
// 'Lambda | CoreC | C5',
// 'Lambda | CoreC | C6',
// 'Lambda | CoreC | C7',
// 'Lambda | CoreC | C8',
// 'Indice | Session | Default Storage',
// 'Indice | Session | Default Security' ]
// )s