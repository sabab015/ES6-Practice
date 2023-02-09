function doubleIt(num){
    return num*2;
}
console.log(doubleIt(2)); 

const tripleIt = function(num){
    return num*3;
}
console.log(tripleIt(3));

const doMath = (x,y) => {
    const sum = x+y;
    const dif = x-y;
    const result = sum * dif;
    return result;
}
console.log(doMath(5,7));