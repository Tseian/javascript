var relativeSortArray = function (arr1, arr2) {
    let res = {};
    for (let i = 0; i < arr2.length; i++) {
        res[arr2[i]] = [];
    }
    for (let i = 0; i < arr1.length; i++) {
        if (res[arr1[i]]) {
            res[arr1[i]].push(arr1[i]);
        }
    }

    let r = [];
    let yuxia = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!res[arr1[i]]) {
            let preIndex = yuxia.length - 1;
            while (preIndex >= 0 && arr1[i] < yuxia[preIndex]) {
                yuxia[preIndex + 1] = yuxia[preIndex];
                preIndex--;
            }
            yuxia[preIndex + 1] = arr1[i];
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let re = res[arr2[i]];
        for (let j = 0; j < re.length; j++) {
            r.push(re[j]);
        }
    }
    for (let i = 0; i < yuxia.length; i++) {
        r.push(yuxia[i]);
    }
    return r;
};

arr1 = [26, 21, 11, 20, 50, 34, 1, 18], arr2 = [21, 11, 26, 20];

console.log(relativeSortArray(arr1, arr2));