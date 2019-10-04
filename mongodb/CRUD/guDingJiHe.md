## 固定集合  

需要实现创建好而且大小固定。如果文档大小超过了设置的值，则删除最老的那部分文档

* 创建固定大小集合 createColloection("guDingDaXiao", {size:1000})
* 自然排序 文档在磁盘上的顺序
* 循环游标
* autoIindexId:false 不回自动在_id上创建索引

## TTL索引

* db.test.ensureIndex({a:1}, {background:true, expireAfterSecs:60 * 60 * 24})此文档在二十四小时后会消失。

