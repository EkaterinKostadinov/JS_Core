window.onload = function extract(content) {
    let text = document.getElementById('content').innerHTML
    console.log(text);
    let regex = /(?<=\().*?(?=\))/g

    let result = text.match(regex).join('; ');
    return result;
}