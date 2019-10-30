const http = require('http');
const keepAliveAgent = new http.Agent({ keepAlive: true });
let options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    agent: false  // 仅为此一个请求创建一个新代理。
}
options.agent = keepAliveAgent;
let q = http.request(options, (res) => {
    console.log(res)
});
q.on('connect', (d) => {
    console.log('d', d)
})

q.on('response', (d) => {
    console.log('d', d)
})
q.end()