function makeNext(P, next = []) {
    let q, k;//q:模版字符串下标；k:最大前后缀长度
    let m = P.length;//模版字符串长度
    next[0] = 0;//模版字符串的第一个字符的最大前后缀长度为0
    for (q = 1, k = 0; q < m; ++q)//for循环，从第二个字符开始，依次计算每一个字符对应的next值
    {
        while (k > 0 && P[q] != P[k]) {
            //递归的求出P[0]···P[q]的最大的相同的前后缀长度k
            //不理解没关系看下面的分析，这个while循环是整段代码的精髓所在，确实不好理解  
            k = next[k - 1];
        }
        if (P[q] == P[k])//如果相等，那么最大相同前后缀长度加1
        {
            k++;
        }
        next[q] = k;
    }
    return next;
}

console.log(makeNext("abcab"))

let t = {
    "a": { pre: [], tail: [] },
    "ab": { pre: ["a"], tail: ["b"] },
    "abc": { pre: ["a", "ab"], tail: ["b", "bc"] },
    "abcd": { pre: ["a", "ab", "abc"], tail: ["d", "cd", "bcd"] },
    "abcda": { pre: ["a", "ab", "abc", "abcd"], tail: ["a", "da", "cda", "bcda"] },
    "abcdab": { pre: ["a", "ab", "abc", "abcd", "abcda"], tail: ["b", "ab", "dab", "cdab", "bcdab", "bcdab"] }
};
