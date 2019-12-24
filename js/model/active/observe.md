## 观察者模式
观察者模式也叫订阅-发布模式，发布者与订阅者之间是一对多的关系，当发布者的某一事件的状态发生变更后，所有有订阅此事件的对象都可以得到通知</p>
下面代码当paper触发daily事件时触发joe的readPaper方法
```js
let paper = {
    // 存储事件与订阅者(方法)的关系
    subscribers: { daily: [], monthly: [] },
    // 订阅
    subscribe: function (fn, type) {
        type = type || 'daily';
        if (!this.subscribers[type]) this.subscribers[type] = [];
        this.subscribers[type].push(fn);
    },
    // 取消订阅
    unsubscribe: function (fn, type) {
        type = type || 'daily';
        let subscribers = this.subscribers[type];
        let index = subscribers.indexOf(fn);
        if (subscribers.length > 0) {
            subscribers.splice(index, 1);
            return true;
        }
        return false;
    },
    // 触发事件
    publish: function (content, type) {
        type = type || 'daily';
        let subscribers = this.subscribers[type] || [];
        let len = subscribers.length;
        for (let i = 0; i < len; i++) {
            subscribers[i](content);
        }
    }
};

let joe = {
    readPaper: function (paperContent) {
        console.log('joe read paper : ', paperContent)
    },
    readMonthlyPaper: function (monthlyPaperContent) {
        console.log('joe read monthly paper : ', monthlyPaperContent)
    }
};

paper.subscribe(joe.readPaper, 'daily')
paper.subscribe(joe.readMonthlyPaper, 'monthly')
paper.unsubscribe(joe.readMonthlyPaper, 'monthly')

paper.publish('big new today', 'daily');
paper.publish('monthly analysis', 'monthly');

```