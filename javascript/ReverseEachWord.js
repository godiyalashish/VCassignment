let str = "this is rainny day"

str = str.split(" ").map(word=>{
    return word.split('').reverse().join('')
}).join(' ');