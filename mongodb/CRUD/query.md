## 低效的操作符

* $where 完全无法使用索引
* $exists 完全无法使用索引，
* $ne 取反 无法使用索引
* $not 无法使用索引
* $nin 总是进行全表扫描

### 索引对象和数组

*  对整个子文档建立索引，只会提高整个子文档的查询速度，
*  对数组建立索引实际上是对整个数组的每个元素建立索引条目，无法对整个数组实体建立索引
*  在数组上建立的索引并不包含任何位置信息，所以无法使用数组索引查找特定位置的数组元素

### 修改索引

* 使用dropIndex()删除索引
* ensureIndex({background:true}) //在用户少的时候才能执行这个操作

### aggregate 聚合框架

#### $project 投射操作

* 1、可以进行算数运算

例如$add, 相加$subtract 第一个数减去第二个数

``` js
db.test.aggregate([{
    $project: {
        "total": {
            "$subtract": [{
                "$add": ["$sally", "$bonus"]
            }, "$401K"]
        }
    }
}])
```

* 2、可以做逻辑运算

例如$cmp $strcasecmp $eq $gt等

* 3、字符串操作

$substr, $concat, $toLower等

* 4、日期操作

$month, $week, $dayOfMonth

#### $group 分组

* 1、算数操作

$sum，$avg, 

* 2、极值操作

$max, $min, $first，$last

* 3、数组操作

$addToSet去重，$push 添加到数组

#### $unwind 将数组拆分多个文档

