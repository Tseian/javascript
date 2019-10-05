const { EventEmitter } = require("events");
class AudioDevice extends EventEmitter {
    play(arg) {
        console.log("paly hello world");
    }
    stop(arg) {
        console.log("stop hello world");
    }
}

let audioDevice = new AudioDevice();

audioDevice.on("play", function (arg) {
    this.play();
});

audioDevice.addListener("con", function (arg) {
    console.log(arg)
})

audioDevice.on("stop", function (arg) {
    this.stop();
});

audioDevice.emit('play', 'hello world');
audioDevice.emit('con', 'con');

setTimeout(() => {
    audioDevice.emit('stop', 'stop');
}, 1000 * 3)
