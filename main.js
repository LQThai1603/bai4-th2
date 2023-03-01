function findMax(n1, n2){
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}

var a=10;
var b=15;
console.log("input: " + a + ", " + b);

console.log(findMax(a,b));