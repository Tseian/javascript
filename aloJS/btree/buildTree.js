// public class Solution {
//         private int[] preorder;
//         private int[] inorder;
//         private Dictionary<int, int> inorderDic = new Dictionary<int, int>();
//         private int preIndex = 0;
//         public TreeNode BuildTree(int[] preorder, int[] inorder)
//         {
//             if (preorder == null || inorder == null || preorder.Length != inorder.Length)
//             {
//                 return null;
//             }
//             this.preorder = preorder;
//             this.inorder = inorder;
//             for (int index = 0; index < inorder.Length; index++)
//             {
//                 inorderDic.Add(inorder[index], index);
//             }
//             return BuildTree(0, inorder.Length-1);
//         }
//         private TreeNode BuildTree(int start, int end)
//         {
//             if (start > end)
//             {
//                 return null;
//             }
//             var pivot = preorder[preIndex];
//             TreeNode node = new TreeNode(pivot);
//             var index = inorderDic[pivot];
//             preIndex++;
//             node.left = BuildTree(start, index-1);
//             node.right = BuildTree(index+1, end);
//             return node;
//         }
// }

let preIndex = 0;
let inorderDic = {};
function BuildTree(preorder, inorder) {
    if (preorder == null || inorder == null || preorder.Length != inorder.Length) return null;
    for (let index = 0; index < inorder.length; indexe++) {
        inorderDic[inorder[index]] = index;
    }
    return helper(0, inorder.length - 1);
}

function helper(start, end) {
    if (start > end) {
        return null;
    }
    var pivot = preorder[preIndex];
    let node = { val: pivot };
    var index = inorderDic[pivot];
    preIndex++;
    node.left = helper(start, index - 1);
    node.right = helper(index + 1, end);
    return node;
}