function gcd(x, y) {
    // 10 ，5 
    // 5,10
    // 0,5
    // x==0 return 5
    console.log(x, y)
    return x == 0 ? y : gcd(y % x, x);
}

console.log(gcd(10, 5))