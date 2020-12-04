/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */

/*
   public TreeNode str2tree(String s) {
       if (s == null && s.length() == 0) return null;
       Stack<TreeNode> stack = new Stack<>();
       for (int i = 0; i < s.length(); i++) {
           if (s.charAt(i) == ')') stack.pop();
           else if (s.charAt(i) >= '0' && s.charAt(i) <= '9'
            || s.charAt(i) == '-') {
               int start = i;
               //找到根元素的值
               while (i < s.length() - 1 && s.charAt(i + 1) >= '0' 
               && s.charAt(i + 1) <= '9') {
                   i++;
               }
               TreeNode root = new TreeNode(Integer.valueOf(s.substring(start, i + 1)));
               //获取父节点
               if (!stack.isEmpty()) {
                   TreeNode parent = stack.peek();
                   if (parent.left == null) parent.left = root;
                   else parent.right = root;
               }

               //压栈
               stack.push(root);
           }
       }
       if (stack.isEmpty()) return null;
       return stack.peek();
   }

*/

// stack 
// 时空 o(n)
var str2tree_ = function (s) {
    if (!s || !s.length) return null;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // 碰到 ) 说明前一个节点是子节点，弹出
        if (s[i] == ')') stack.pop();
        else if (s[i] >= '0' && s[i] <= '9' || s[i] == '-') {
            let start = i;

            //找到根元素 存在有两位的数字
            while (i < s.length - 1
                && s[i + 1] >= '0'
                && s[i + 1] <= '9') {
                i++;
            }

            let val = s.slice(start, i + 1);
            let root = { val: parseInt(val) };
            // 只有根节点没有父节点，压入栈
            if (stack.length) {
                let parent = stack[stack.length - 1];
                if (!parent.left) parent.left = root;
                else parent.right = root;
            }

            //压栈
            stack.push(root);
        }
    }
    if (!stack.length) return null;
    return stack.pop();
};
/*
class Solution {
    public:
        TreeNode* dfs(const string& s, int l, int r) {
            if (l > r) return NULL;
            int i = l;
            while (i <= r && s[i] != '(') ++i;
            TreeNode* res = new TreeNode(stoi(s.substr(l, i - l)));
            while (i <= r) {
                int j = i;
                int c = 1;
                while (c > 0 && ++j <= r) c += (s[j] == '(') - (s[j] == ')');
                auto node = dfs(s, i + 1, j - 1);
                if (res->left == NULL) res->left = node;
                else res->right = node;
                i = j + 1;
            }
            return res;
        }
        TreeNode* str2tree(string s) {
            return dfs(s, 0, s.size() - 1);
        }
    };
} 
 */


// 递归
// 返回条件 i<r
// 遇到 （ 继续前进
var str2tree = function (str) {
    return helper(str, 0, str.length - 1);
}

function helper(s, l, r) {
    let i = l;
    while (i <= r && s[i] != '(')++i;
    let res = { val: parseInt(s.slice(l, i)) }
    while (i <= r) {
        let j = i;
        let c = 1;
        while (c > 0 && ++j <= r) {
            c += (s[j] == '(') - (s[j] == ')');
        }
        let node = helper(s, i + 1, j - 1);
        if (!res.left) res.left = node;
        else res.right = node;
        i = j + 1;
    }
    return res;
}

console.log(str2tree("4(2(13)(1))(6(5))"));