function isChinese(str) {
    const re = /^[\u4e00-\u9fa5]+$/;
    return re.test(str);
}
console.log(isChinese('哈哈'))