function fibonacci(num){
    if(num === 1) return [1];
    const res = [1, 1];
    for(let i = 2; i < num; i++){
        res.push(res[i-1] + res[i-2]);
    }
    return res;
} 

console.log(fibonacci(12));