/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 归并排序
var sortList = function (head) {
    let dummyHead = {};
    dummyHead.next = head;
    let p = head;
    let length = 0;

    while (p) {
        ++length;
        p = p.next;
    }

    for (let size = 1; size < length; size *= 2) {
        let cur = dummyHead.next;

        let tail = dummyHead;
        console.log("cur===", JSON.stringify(cur));
        while (cur) {

            let left = cur;
            let right = cut(left, size); // left.@.@ right.@.@.@...

            console.log("right===", right);

            cur = cut(right, size); // left.@.@ right.@.@  cur.@....
            console.log("cut right===", right);
            console.log("left===", left);
            console.log("tail===", tail);

            tail.next = merge(left, right);

            console.log("merge tail===", tail);

            while (tail.next) {
                tail = tail.next;
            }

            console.log("after tail===", tail);
            console.log("==================");

        }
    }
    return dummyHead.next;
};

function cut(head, n) {
    let p = head;
    while (--n && p) {
        p = p.next;
    }

    if (!p) return null;

    let next = p.next;
    p.next = null;
    return next;

}

function merge(l1, l2) {
    let dummyHead = {};
    let p = dummyHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            p = p.next;
            l1 = l1.next;
        } else {
            p.next = l2;
            p = p.next;
            l2 = l2.next;
        }
    }
    p.next = l1 ? l1 : l2;
    return dummyHead.next;
}

const { list3, list1 } = require("./sortedList");

console.log(JSON.stringify(list3));
// console.log(JSON.stringify(list1));
console.log(JSON.stringify(sortList(list3))); 