// class Solution {
//     public:
//         vector<int> levelOrder(TreeNode* root) 
//         {
//             vector<int> ret;
//             queue<TreeNode*> q;
//             if(root)
//                 q.push(root);
//             while(!q.empty())
//             {
//                 TreeNode* temp = q.front();
//                 ret.push_back(temp->val);
//                 q.pop();
//                 if(temp->left)
//                     q.push(temp->left);
//                 if(temp->right)
//                     q.push(temp->right);
//             }
//             return ret;
//         }
//     };

const btree = require("./btree")
function levelOrder(root) {
    let res = [];
    let queue = [];
    if (root) queue.push(root)

    while (queue[0]) {
        let tem = queue.pop();
        res.push(tem.val);
        if (tem.left) {
            queue.push(tem.left)
        }
        if (tem.right) {
            queue.push(tem.right)
        }
    }
    return res
}
console.log(levelOrder(btree.bst))