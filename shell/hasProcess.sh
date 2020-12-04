# 判断一个进程是否存在
#  ps -e 输出全部进程
#  grep mongodb寻找一个mongodb进程
# wc -l 统计多少行
#!/bin/bash
count=$(ps -e | grep mongodb | wc -l)
if [ $count -eq 0 ]; then
    echo "hello"
fi
