function matchLinks(strs) {

    const pattern = /www\.[A-Za-z-\d]+(?:\.[a-z]+)+/;;

    let links = [];
    for (const str of strs) {
        let matched = str.match(pattern);
        if (matched !== null) {
            for (const match of matched) {
                links.push(matched);
            }
        }
    }

    console.log(links.join('\n'));
}