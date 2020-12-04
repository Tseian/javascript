process.on('message', (m) => {
    console.log('父进程：', m);
    process.send("我是子进程")
});

// 使父进程输出: 父进程收到消息 { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });