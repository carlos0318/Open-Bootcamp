let res = 1;
let i = 1;
bubcleWhile: while(true) {
    res *= i;
    if(i === 10) break bubcleWhile;
    i++;
}
console.log(res);