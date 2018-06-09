function isPalindrome (s) {
return (s.match(/[A-z]+/g).join('') === s.split('').reverse().join('').match(/[A-z]+/ig).join(''));
}

console.log(isPalindrome('a car, a man, a maraca'));


