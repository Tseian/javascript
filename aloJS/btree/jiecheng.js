function jiecheng(n) {
    if (n == 0) return 1;
    return n * jiecheng(n - 1);
}

/**
 * 首先我们要明白函数调用另外一个函数的时候，会把当前的所有数据状态会保存在寄存器(寄存器如果不够会保存到内存)，
 * 如果调用函数也需要用寄存器，需要调用程序自己维护好寄存器状态
 * 程序压栈 3
 * 第一次调用遇到尾递归调用自己，操作系统会把当前n等于3存入寄存器中， 
 * 上一次尾递归调用传入的参数值是2，此时n==2，再次遇到尾递归将当前n=3存入寄存器中，
 * 上一次尾递归调用传入的参数值是1，此时n==1，再次遇到尾递归将当前n=3存入寄存器中，
 * 上一次尾递归调用传入的参数值是0，此时n=0=，被尾递归调用的函数(函数自己)返回1，执行权限(cpu)交还给调用者
 * 此时调用者保存的n值是1，函数立即返回1*1=1的值，执行权限交还给调用者
 * 此时调用者保存的n值是2，函数立即返回2*1=2的值，执行权限交还给调用者
 * 此时调用者保存的n值是3，函数立即返回3*2=3的值，执行权限交换给调用者，此时尾递归的压栈已经全部完成，返回最终结果
 */



/**
 * 扩站到先序遍历二叉树 preorder 
 * 先序遍历
 *  根 -》左 -》右
 * @param {*} root 
 * 
 *        a
 *    b       c
 *  b1  b2 c1   c2
 */
function preorder_recursion(root) {
    if (!root) {
        return
    }
    console.log(root.val);
    preorder_recursion(root.left);
    preorder_recursion(root.right);
    return
}

/**
 * 第一次调用 root=a，打印a后，函数遇到第一个尾递归 preorder(b)，系统将尾递归调用者的状态保存，称之为状态A(preorder(c)还未执行)
 * 上一次递归调用传入的值为b，打印b后，遇到尾递归，preorder(b1),系统将尾递归调用者状态保存，称之为状态 B(preorder(b2)还未执行)
 * 上一次递归调用传入的值为b1，打印b1后，遇到尾递归，preorder(b1.left),系统将尾递归调用者状态保存，称之为状态 B1(preorder(b1.right)还未执行)
 * 上一次递归调动传入的值为b1.left为空，立即返回，此时执行权限交还给状态B1，
 * 恢复B1状态，立即执行 preorder(b1.right)，此时系统再一次将B1状态保存(此时return还未执行)，
 * 上一次递归调动传入的值为b1.right为空，立即返回，此时执行权限交还给状态B1，
 * 恢复B1状态，立即返回，B1的调用者状态为B；
 * 恢复B状态，立即执行preorder(b2),此时系统再一次将B状态保存(此时还未执行return)，
 * 上一次递归调动传入的值为b2，打印b2，遇到尾递归，preorder(b2.left)，系统将尾递归调用者状态保存，称之为状态 B2(preorder(b2.right)还未执行)
 * 上一次递归调动传入的值为b2.left为空，立即返回，此时执行权限交还给状态B2，
 * 恢复B2状态，立即执行preorder(b2.right),此时系统再一次将B2状态保存(此时还未执行return)，
 * 上一次递归调动传入的值为b2.right为空，立即返回，此时执行权限交还给状态B2，
 * 恢复状态B2，立即返回，B2的调用者状态为B；
 * 恢复B状态，立即返回，B的调用者状态为A，
 * 
 * 恢复A状态，立即执行preorder(c),此时系统再一次将A状态保存(此时还未执行return)，
 * 上一次递归调动传入的值为c，打印c，遇到尾递归，preorder(c1)，系统将尾递归调用者状态保存，称之为状态C(preorder(c2)还未执行)
 * 上一次递归调用传入的值为c1，打印c1后，遇到尾递归，preorder(c1.left),系统将尾递归调用者状态保存，称之为状态 C1(preorder(c1.right)还未执行)
 * 上一次递归调动传入的值为c1.left为空，立即返回，此时执行权限交还给状态C1，
 * 恢复C1状态，立即执行 preorder(c1.right)，此时系统再一次将C1状态保存(此时return还未执行)，
 * 上一次递归调动传入的值为c1.right为空，立即返回，此时执行权限交还给状态C1，
 * 恢复C1状态，立即返回，C1的调用者状态为C；
 * 恢复C状态，立即执行preorder(c2),此时系统再一次将C状态保存(此时还未执行return)，
 * 上一次递归调动传入的值为c2，打印c2，遇到尾递归，preorder(c2.left)，系统将尾递归调用者状态保存，称之为状态 C2(preorder(c2.right)还未执行)
 * 上一次递归调动传入的值为c2.right为空，立即返回，此时执行权限交还给状态C2，
 * 恢复状态C2，立即执行preorder(c2.right)，系统再次将C2状态保存，(此时return还未执行)，
 * 上一次递归调动传入的值为c2.right为空，立即返回，此时执行权限交还给状态C2， 
 * 恢复状态C2，立即返回，C2的调用者状态为C；
 * 恢复状态C，立即返回，C的调用者状态为A；
 * 恢复状态A，立即返回，尾递归压栈为空，执行结束，返回结果
 */


let btree = {
    val: "a",
    left: {
        val: "b",
        left: {
            val: "b1",
            left: null,
            right: null
        },
        right: {
            val: "b2",
            left: null,
            right: null
        }
    },
    right: {
        val: "c",
        left: {
            val: "c1",
            left: null,
            right: null
        },
        right: {
            val: "c2",
            left: null,
            right: null
        }
    }
};
preorder_recursion(btree)

