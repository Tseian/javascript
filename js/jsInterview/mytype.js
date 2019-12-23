function myType(v) {
    return Object.prototype.toString.call(v)
        .replace(/^.{8}(.+)]$/, (m, $1) => {
            let res = $1.toLowerCase()
            console.log(res)
            return res;
        });
}

console.log(myType([]));

console.log(typeof {} === typeof [])