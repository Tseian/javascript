## net网络
net 模块用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）。
IPC支持 net 模块在 Windows 上支持命名管道 IPC，在其他操作系统上支持 Unix 域套接字。


### IPC 连接的识别路径
- 在 Windows 上，本地域通过命名管道实现。路径必须是以 \\?\pipe\ 或 \\.\pipe\ 为入口。
- 在 Unix 上，本地域也称为 Unix 域。 参数 path 是文件系统路径名。

### net.Server 类  继承了eventEmitter
- 此类用于创建 TCP 或 IPC 服务器。

#### 事件 
- 'close' 事件 当 server 关闭的时候触发。 如果有连接存在，直到所有的连接结束才会触发这个事件。
- 'connection' 事件 当一个新的连接建立的时候触发。 socket 是一个 net.Socket 实例。
- 'error' 事件 
- 'listening' 事件 当调用 server.listen() 绑定服务器之后触发。

#### 方法
- server.address() 
  如果在 IP socket 上监听，则返回操作系统报告的绑定的 address、地址 family 名称、以及服务器 port（用于查找在获取操作系统分配的地址时分配的端口）：{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。
- server.close([callback]) 阻止 server 接受新的连接并保持现有的连接。
  callback <Function> 当 server 被关闭时调用。

- server.getConnections(callback) 异步获取服务器的当前并发连接数。当 socket 被传递给子进程时工作。
- server.listen()  
  启动一个服务器来监听连接。 net.Server 可以是 TCP 或 IPC 服务器，具体取决于它监听的内容。
  当且仅当上次调用 server.listen() 发生错误或已经调用 server.close() 时，才能再次调用 server.listen() 方法。

- server.listening 表明 server 是否正在监听连接。
- server.maxConnections 设置该属性使得当 server 连接数过多时拒绝连接。
  一旦将一个 socket 发送给 child_process.fork() 生成的子进程，就不推荐使用该选项。
- server.unref() 
  如果这个 server 在事件系统中是唯一有效的，那么对 server 调用 unref() 将允许程序退出。


### net.Socket 类 继承自: <stream.Duplex> 也是一个EventEmitter




#### 事件
- 'close' 事件 一旦 socket 完全关闭就发出该事件
- 'connect' 事件 当一个 socket 连接成功建立的时候触发该事件。
- 'data' 事件 当接收到数据的时触发该事件。
- 'drain' 事件 当写入缓冲区变为空时触发。
- 'end' 事件 当 socket 的另一端发送一个 FIN 包的时候触发，从而结束 socket 的可读端。
- 'lookup' 事件 在找到主机之后创建连接之前触发。
- 'ready' 事件 套接字准备好使用时触发。
- 'timeout' 事件 当 socket 超时的时候触发。

#### 方法
- new net.Socket([options])
  创建一个 socket 对象。 新创建的 socket 可以是 TCP socket 也可以是 IPC 端点流，取决于它连接 connect() 到什么。

- socket.address() 
  返回操作系统报告的 socket 的 address、地址的 family 名称、以及 port： { port: 12346, family: 'IPv4', address: '127.0.0.1' }。

- socket.bufferSize 此属性显示当前即将被写入的缓冲的字符数 socket是一个流，流的部分写入缓冲区
- socket.bytesRead 接收的字节数量。
- socket.bytesWritten 发送的字节数量。
- socket.connect() 在给定的套接字上启动一个连接。
  - socket.connect(options[, connectListener]) tcp链接
  - socket.connect(path[, connectListener]) ipc通道链接 
  - socket.connect(port[, host][, connectlistener]) tcp链接
  - socket.connecting 
    如果为 true 则 socket.connect(options[, connectListener]) 被调用但还未结束。
- socket.destroy([exception]) 
  确保在该 socket 上不再有 I/O 活动。仅在出现错误的时候才需要（如解析错误等）。
- socket.end([data[, encoding]][, callback]) 
  半关闭 socket。 例如发送一个 FIN 包。 服务端仍可以发送数据。
- socket.localAddress 远程客户端连接的本地 IP 地址字符串。
- socket.localPort  用数字表示的本地端口。例如 80 或 21。
- socket.pause() 暂停读写数据。也就是说，'data' 事件将不会再被触发。
- socket.resume() 在调用 socket.pause() 之后恢复读取数据。
- socket.setKeepAlive([enable][, initialdelay]) 
  启用/禁用长连接功能， 并且在第一个长连接探针被发送到一个空闲的 socket 之前可选则配置初始延迟。
- socket.setNoDelay([noDelay]) 禁止 Nagle 算法。默认情况下 TCP 连接使用 Nagle 算法，在发送之前缓冲数据。
- socket.write(data[, encoding][, callback]) 
  在 socket 上发送数据。第二个参数制定了字符串的编码 - 默认是 UTF8 编码。
- net.connect() 返回socket对象
  - net.connect(options[, connectListener])
  - net.connect(path[, connectListener]) ipc通道
  - net.connect(port[, host][, connectlistener]) tcp链接 
- net.createConnection() 一个用于创建 net.Socket 的工厂函数，立即使用 socket.connect() 初始化链接，然后返回启动连接的 net.Socket。
- net.createConnection(options[, connectListener])
  connectListener <Function> net.createConnection() 方法的通用参数。如果制定了，将被添加为返回 socket 上的 'connect' 事件上的监听器。

- net.createServer([options][, connectionlistener]) 
  connectionListener <Function> 自动设置为 'connection' 事件的监听器。
  服务器可以是一个 TCP 服务器或 IPC 服务器，这取决于 listen() 监听什么。