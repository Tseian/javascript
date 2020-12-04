/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
    let nos = {};
    let n = nos;
    while (maxNumbers) {
        maxNumbers--;
        n.next = { status: true, val: maxNumbers };
        n = n.next;
    }
    this.nos = nos.next;
    return this;
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
    let h = this.nos;
    while (h) {
        if (h.status == true) {
            h.status = false;
            return h.val;
        }
        h = h.next;
    }
    return -1;
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
    let h = this.nos;
    while (h) {
        if (h.val == number) return h.status;
        h = h.next;
    }
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
    let h = this.nos;
    while (h) {
        if (h.val == number) {
            h.status = true;
            break
        }
        h = h.next;
    }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */