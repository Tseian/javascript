/*
实现一个对象的深拷贝函数，需要考虑对象的元素类型以及对应的解决方案：
基础类型：这种最简单，直接赋值即可
对象类型：递归调用拷贝函数
数组类型：这种最难，因为数组中的元素可能是基础类型、对象还可能数组，因此要专门做一个函数来处理数组的深拷贝
*/

/**
 * 数组深拷贝
 * @param {Array} src 
 * @param {Array} target 
 */
function cloneArr(src, target) {
    for (let item of src) {
        if (Array.isArray(item)) {
            target.push(cloneArr(item, []))
        } else if (typeof item === 'object') {
            target.push(deepClone(item, {}));
        } else {
            target.push(item);
        }
    }
    return target;
}

/**
 * 对象深拷贝
 * @param {Object} src 
 * @param {Object} target 
 */
function deepClone(src, target) {
    let keys = Object.keys(src);
    let item;
    for (let k of keys) {
        item = src[k];
        if (Array.isArray(item)) {
            target[k] = cloneArr(item, [])
        } else if (typeof item === 'object') {
            target[k] = deepClone(item, {});
        } else {
            target[k] = item;
        }
    }
    return target;
}


let a = {
    age: 1,
    jobs: {
        first: "FE"
    },
    schools: [
        {
            name: "shenda"
        },
        {
            name: "shiyan"
        }
    ],
    arr: [
        [
            {
                value: "1"
            }
        ],
        [
            {
                value: "2"
            }
        ]
    ]
};

let b = {};
deepClone(a, b);

a.jobs.first = "native";
a.schools[0].name = "SZU";
a.arr[0][0].value = "100";

console.log(a.jobs.first, b.jobs.first); // output: native FE
console.log(a.schools[0], b.schools[0]); // output: { name: 'SZU' } { name: 'shenda' }
console.log(a.arr[0][0].value, b.arr[0][0].value); // output: 100 1
console.log(Array.isArray(a.arr[0])); // output: true