// 给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。

// 每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。

// 这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。

// 返回一个符合上述规则的链表的列表。

// 举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

// 示例 1：

// 输入: 
// root = [1, 2, 3], k = 5
// 输出: [[1],[2],[3],[],[]]
// 解释:
// 输入输出各部分都应该是链表，而不是数组。
// 例如, 输入的结点 root 的 val= 1, root.next.val = 2, \root.next.next.val = 3, 且 root.next.next.next = null。
// 第一个输出 output[0] 是 output[0].val = 1, output[0].next = null。
// 最后一个元素 output[4] 为 null, 它代表了最后一个部分为空链表。
// 示例 2：

// 输入: 
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// 输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
// 解释:
// 输入被分成了几个连续的部分，并且每部分的长度相差不超过1.前面部分的长度大于等于后面部分的长度。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/split-linked-list-in-parts
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let n = 0;
    let h = root;
    while (h) {
        n++;
        h = h.next;
    }
    let res = [];
    let size = Math.floor(n / k);
    let quyu = n % k;
    for (let i = 0; i < k; i++) {
        res[i] = root;
        if (quyu-- > 0) root = cut(root, size + 1);
        else root = cut(root, size || 1)
    }
    return res;
};

function cut(head, n) {
    if (!head) return head;
    let p = head;
    while (--n && p) {
        p = p.next;
    }
    if (!p) return null;
    let next = p.next;
    p.next = null;
    return next;
}

// if (k >= n) {
//     while (n) {
//         --n;
//         if (!root) res.push(null)
//         else {
//             let tem = root.next;
//             root.next = null;
//             res.push(root);
//             root = tem;
//         }
//     }
//     return res;
// }