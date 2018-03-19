function isPalindrome(word) {

    let reverse = word.split('').reverse().join('');
    return reverse === word;
}