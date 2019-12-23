/**
 * 数据结构
 * 1、数组，2、树，3、图，4、链表，5、堆，6、栈，7、队列，8、散列哈希
 */
// 数组
let array = [1, 2, 3, 4];
// 树
let tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
};

// 图参见  graph.js

// 链表  单项链表 双向链表
// 单项链表
let link = {
    val: 0,
    next: {
        val: 1,
        next: null
    }
};

let dlink = {
    val: 0,
    next: {
        val: 1,
        next: null,
        pre: null
    },
    pre: {
        val: 1,
        next: null,
        pre: null
    }
};

// 堆， 最大堆 最小堆
// 最大堆 最大的元素位于根节点，其所有子树也是最大元素位于根节点
// 最小堆 最小的元素位于根节点，其所有子树也是最小元素位于根节点

// 栈 只有一端(栈顶)可以操作的线性表 push或pop  后进先出

// 队列 两端可操作的线性表 但是队列头只能push 队列尾只能pop  先出先出

// 散列哈希  键值对
