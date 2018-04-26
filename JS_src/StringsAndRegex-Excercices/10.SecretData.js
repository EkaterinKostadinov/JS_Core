function encrypt(strArr) {
    const pattern = /\*[A-Z]{1}[A-Za-z]*(?= |\t|$)|\+[0-9-]{10}(?= |\t|$)|![A-Za-z0-9]+(?= |\t|$)|_[A-Za-z0-9]+(?= |\t|$)/g;

    strArr.forEach(element => {
        let matched = element.match(pattern);
        if (matched !== null) {
            matched.forEach(m => {
                element = element.replace(m, '|'.repeat(m.length))
            });
        }
        console.log(element);
    });
}