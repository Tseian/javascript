function test(...values) {
    let sum = 0;
    for (let val of values) {
        console.log(sum += val);
    }
}

test(1, 2, 3, 4)