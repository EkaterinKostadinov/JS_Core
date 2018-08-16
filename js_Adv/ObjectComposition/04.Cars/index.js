function solve(arr) {
    let result = {};
    let commandProcessor = (function () {

        function create(arr) {
            if (arr.length === 2) {
                let name = arr[1];
                result[name] = {};
            } else {
                let newObject = arr[1];
                let inheritName = arr[3];

                result[arr[1]] = Object.create(result[inheritName]);
            }
        }

        function set(arr) {
            let objName = arr[1];
            let key = arr[2];
            let value = arr[3];
            result[objName][key] = value;
        }

        function print(arr) {
            let printResult = [];
            let objectToPrint = arr[1];
            for (const key in result[objectToPrint]) {
                printResult.push(key + ':' + result[objectToPrint][key]);
            }
            console.log(printResult.join(', '));
        }

        return {
            create,
            print,
            set,
        }

    })();
    for (let i = 0; i < arr.length; i++) {
        let splittedInput = arr[i].split(' ');
        let command = splittedInput[0];

        commandProcessor[command](splittedInput);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);