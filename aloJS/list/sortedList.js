module.exports = {
    list1: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null
                    }
                }
            }
        }
    },
    list2: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    },
    list3: {
        val: 7,
        next: {
            val: 6,
            next: {
                val: 5,
                next: {
                    val: 4,
                    next: {
                        val: 3,
                        next: null
                    }
                }
            }
        }
    },
    list4: {
        val: 1,
        next: {
            val: 8,
            next: null
        }
    },
    list5: {
        val: 9,
        next: {
            val: 8,
            next: null
        }
    },
    list6: {
        val: 0,
        next: {
            val: 1,
            next:
            {
                val: 2,
                next: {
                    val: 4,
                    next: null
                }
            }
        }
    },
    list7: {
        "$id": "1",
        "next": {
            "$id": "2",
            "next": null,
            "random": {
                "$ref": "2"
            },
            "val": 2
        },
        "random": {
            "$ref": "2"
        },
        "val": 1
    }
}