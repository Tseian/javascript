/**
 * 装饰者模式：在不改变对象自身的基础上，动态地添加功能代码。
 * 将功能代码提前定义在构造函数中，在使用的使用开启部分功能，同事还要提供取出装饰器的方法
 */

function Sale(price) {
    this.price = price || 100;
    this.decorators_list = {};
}

Sale.decorators = {
    fedtax: {
        getPrice: function (price) {
            return price + (price * 5 / 100);
        }
    },
    quebec: {
        getPrice: function (price) {
            return price + (price * 5 / 100);
        }
    },
    money: {
        getPrice: function (price) {
            return '$' + price.toFixed(2);
        }
    }
};

/**
 * 增加装饰器
 */
Sale.prototype.decorate = function (type, decorator) {
    if (!this.decorators_list[type]) this.decorators_list[type] = [];
    this.decorators_list[type].push(decorator);
}
/**
 * 卸载装饰器
 */
Sale.prototype.delDecorate = function (type, decorator) {
    let list = this.decorators_list[type];
    if (list.length < 0) return
    let index = list.indexOf(decorator);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * 获取参数
 */
Sale.prototype.getPrice = function () {
    let price = this.price, i,
        type = "getPrice", name,
        list = this.decorators_list[type] || [],
        len = list.length;
    for (i = 0; i < len; i++) {
        name = list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
}

let sale = new Sale(100);
sale.decorate('getPrice', 'fedtax');
sale.decorate('getPrice', 'quebec');
sale.decorate('getPrice', 'money');
console.log(sale.getPrice());

let sale2 = new Sale(100);
sale2.decorate('getPrice', 'quebec');
sale2.decorate('getPrice', 'money');
console.log(sale2.getPrice());