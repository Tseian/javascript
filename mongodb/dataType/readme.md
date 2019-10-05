## 基本数据类型

* null  表示空值或不存在的字段
* boolean true和false
* number 默认是64位浮点型数字
* string 字符串
* date 日期
* regex 正则表达式
* array 
* embed object 内嵌文档
* objectId 对象id
* binary 二进制数据
* code 代码



### objectId 
体积小，12byte，近乎唯一，能快速生成，有顺序。
- a 4-byte value representing the seconds since the Unix epoch, 时间戳
- a 5-byte random value, and 随机数
- a 3-byte counter, starting with a random value. 从随机数开始的计数器
