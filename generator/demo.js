// 控制函数执行状态
function* hello() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = hello();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());