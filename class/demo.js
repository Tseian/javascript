function A() { }
function B() { }
function P() { }
A.prototype = P.prototype
B.prototype = new A()
B.prototype.constructor = B