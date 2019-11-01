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
const list = require("../list");
var insertionSortList = function (head) {
    if (!head) return head;
    let res = {};
    let p = head; //输入元素
    let q = head; //找插入位置
    let k = q;//记录q前一个指针,修改指针时使用
    while (p.next) {
        if (p.val < p.next.val) {
            p = p.next;
            continue;
        }
        if (p.next.val < q.val) {
            let temp = p.next;
            p.next = temp.next;
            temp.next = q;
            if (q == head) {
                head = temp;
            }
            else {
                k.next = temp;
            }
            q = head;//从头开始检索
        } else {
            if (q == p) {
                p = p.next;
                continue;
            }
            else {
                k = q;
                q = q.next;
            }
        }
    }
    return head;
};

console.log(JSON.stringify(insertionSortList(list)));