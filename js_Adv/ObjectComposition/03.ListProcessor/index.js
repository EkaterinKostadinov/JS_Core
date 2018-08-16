function solution(input) {
    let result = [];
    let processor = (function () {

        function add(str) {
            result.push(str);
        }

        function remove(str) {
            result = result.filter(el => el !== str);
        }

        function print() {
            console.log(result.join(','));
        }

        return {
            add,
            remove,
            print
        }
    })()
    for (let i = 0; i < input.length; i++) {
        let [command, value] = input[i].split(' ');
        processor[command](value);
    }
};

solution(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print'])