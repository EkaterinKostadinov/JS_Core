function PrintWordsUppercase(string) {

    let words = string.toUpperCase().split((/\W+/)).filter(w => w != '');
    
    console.log(words.join(', '));
}