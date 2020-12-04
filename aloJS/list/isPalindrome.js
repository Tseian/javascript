/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return head;

    let slow = head, fast = head, prev = null;
    while (fast) {//find mid node
        slow = slow.next;
        fast = fast.next ? fast.next.next : fast.next;
    }

    let pre = null;
    let curr = slow;
    while (curr) {
        let res = { val: curr.val };
        res.next = pre;
        pre = res;
        curr = curr.next;
    }

    while (head && pre) {
        if (head.val != pre.val) return false;
        pre = pre.next;
        head = head.next;
    }
    return true
};

var isPalindromeA = function (head) {
    if (!head) return head;
    let s1 = 0, s2 = 0; t = 1;
    while (head) {
        s1 = s1 * 10 + head.val;
        s2 = s2 + t * head.val;
        t = t * 10;
        head = head.next;
    }
    return s1 == s2
};


const { list2 } = require("./sortedList")
console.log(JSON.stringify(isPalindromeA(list2)))