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
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 9,
                        next: null
                    }
                }
            }
        }
    },
    list4: {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    },
    list5: {
        val: 7,
        next: {
<<<<<<< HEAD
            val: 9,
            next: null
=======
            val: 2,
            next: {
                val: 4,
                next: {
                    val: 3,
                    next: null
                }
            }
>>>>>>> 1b77eb7691b8a17af7b09adf393a241b65e08e89
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