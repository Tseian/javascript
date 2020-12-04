var bsDeep = function (root) {
    if (!root) return 0;
    let l = bsDeep(root.left)
    let r = bsDeep(root.right)
    return l > r ? l + 1 : r + 1;
}
let b = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 2,
            left: {
                val: 2,
                left: {
                    val: 2,
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 2,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
}

console.log(bsDeep(b))