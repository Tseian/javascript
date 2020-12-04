function sm(steps, args, callback) {
    let tasks = steps.concat();
    setTimeout(function () {
        let task = tasks.shift();
        task.apply(null, args || []);

        if (task.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback();
        }
    }, 25);
}

sm([1, 3, 4], [1, 3], function () { console.log("done") })