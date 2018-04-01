function parseEmployeeData(data) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let i = 0; i < data.length; i++) {
        let person = '';
        if (person = pattern.exec(data[i])) {
            console.log(`Name: ${person[1]}`);
            console.log(`Position: ${person[3]}`);
            console.log(`Salary: ${person[2]}`);
        }
    }

}