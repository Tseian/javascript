/**
 * 订阅-发布模式定义了对象之间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖它的对象都可以得到通知。
 */

let paper = {
    subscribers: { daily: [], monthly: [] },
    subscribe: function (fn, type) {
        type = type || 'daily';
        if (!this.subscribers[type]) this.subscribers[type] = [];
        this.subscribers[type].push(fn);
    },
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
paper.publish('monthly analysis', 'monthly')