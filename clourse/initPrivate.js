var Counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
            console.log(privateCounter)
        },
        decrement: function () {
            changeBy(-1);
            console.log(privateCounter)
        },
        value: function () {
            return privateCounter;
        }
    }
})();

module.exports = { Counter };


Counter.increment()