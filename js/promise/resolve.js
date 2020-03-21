let th = {
    then: function () {
        console.log("a==", "a")
        return "a"
    }
};

const promise1 = Promise.resolve(async function m1(ctx) {
    console.log("m1");
    return async function m2() {
        console.log("m2");
        return async function m3() {
            console.log("m3");
            return "m3"
        }()
    }()
}());

promise1.then(function (value) {
    console.log("finaly====", value);
    // expected output: 123
});

