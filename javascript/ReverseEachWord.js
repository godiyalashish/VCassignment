let str = "this is rainny day"

str = str.split(" ").map(function(word){
    return word.split('').reverse().join('')
}).join(' ');
