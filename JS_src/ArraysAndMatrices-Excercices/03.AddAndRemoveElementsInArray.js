function solve(commands) {

    let arr = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            arr.push(i + 1);
        } else if (commands[i] === 'remove') {
            arr.pop();
        }
    }

    if (arr.length === 0) {
        return 'empty';
    }

    console.log(arr.join('\n'));
}