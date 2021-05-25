/*
var isValid = function(s) {
    var splitStr = s.split('');
    var stack = [];
    if(s.length%2 !== 0){
        return false;
    }
    for(var i = 0; i < splitStr.length; i++){
        if(splitStr[i] === '{' || splitStr[i] === '[' || splitStr[i] === '('){
            stack.push(splitStr[i]);
            continue;
        }
        if(splitStr[i] === '}' && stack[stack.length-1] === '{'){
            stack.pop()
            continue;
        }
        if(splitStr[i] === ']' && stack[stack.length-1] === '['){
            stack.pop()
            continue;
        }
        if(splitStr[i] === ')' && stack[stack.length-1] === '('){
            stack.pop()
            continue;
        } else {
            return false;
        }
    }
    if(stack.length !== 0){
        return false;
    }
    return true;
};

s = '{}[]{}'
console.log(isValid(s))

//string of char
//boolean
*/

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

var haystack = "";
var needle = ""
console.log(strStr(haystack,needle))