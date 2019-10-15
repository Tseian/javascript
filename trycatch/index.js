function f() {
    try {
        console.log(0);
        return 'try'
        // throw 'bogus'

    } catch (e) {
        console.log(1);
        return 'catch'; // this return statement is suspended
        // until finally block has completed
        console.log(2); // not reachable
    } finally {
        console.log(3);
        // return 'finally'; // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5); // not reachable
    return 'end'
}
console.log(f()); // console 0, 1, 3; returns false