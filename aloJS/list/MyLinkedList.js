/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.list = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || !this.list) return -1;
    let h = this.list;
    while (index > 0) {
        if (h) h = h.next;
        --index;
    }
    return h ? h.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let h = { val, next: this.list };
    this.list = h;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (!this.list) return this.list = { val, next: null };
    let h = this.list;
    while (h.next) {
        h = h.next;
    }
    h.next = { val, next: null };
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (!this.list) return this.list = { val, next: null };
    let n = { val, next: null };
    if (index <= 0) {
        n.next = this.list;
        this.list = n;
        return
    }
    let h = this.list;
    let pre;
    while (index) {
        if (h) {
            pre = h; h = h.next;
        } else {
            break
        }
        index--;
    }
    if (index > 0) return
    if (!h) {
        pre.next = n;
        return
    }
    if (h) {
        pre.next = n;
        n.next = h;
        return
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (!this.list || index < 0) return
    if (index == 0) return this.list = this.list.next;
    let h = this.list;
    let pre;
    while (index > 0) {
        if (h) {
            pre = h;
        }
        h = h.next;
        --index;
    }
    if (!h) return;
    pre.next = h.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtHead(1)
console.log(obj)
obj.addAtTail(2)
console.log(obj.list)
var param_1 = obj.get(0)
console.log(param_1)
obj.addAtIndex(2, 3)
console.log("addAtIndex", JSON.stringify(obj.list))
obj.deleteAtIndex(0)
console.log("deleteAtIndex", JSON.stringify(obj.list))

// 
// 

