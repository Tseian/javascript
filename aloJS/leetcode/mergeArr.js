var mergeTwoLists = function (l1, l2) {
    let preH = { val: -1, next: null };
    let pre = preH;
    while (l1 !== null && l2 !== null) {
        if (l1.val >= l2.val) {
            pre.next = l2;
            l2 = l2.next;
        } else {
            pre.next = l1;
            l1 = l1.next;
        }
        pre = pre.next;
    }
    prev.next = l1 == null ? l2 : l1;
    return preH.next;
};