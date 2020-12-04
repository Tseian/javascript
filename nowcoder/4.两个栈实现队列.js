/*
用两个栈来实现一个队列，完成队列的Push和Pop操作。队列中的元素为int类型。
*/
let stack1 = [];

function push(node) {
    // write code here
    stack1.push(node);
}
function pop() {
    // write code here
    return stack1.shift();
}
module.exports = {
    push: push,
    pop: pop
};