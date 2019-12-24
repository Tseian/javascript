class Dictionary {
    constructor() {
        this.items = {};
    }

    set(key, value) { // 向字典中添加或修改元素
        this.items[key] = value;
    }

    get(key) { // 通过键值查找字典中的值
        return this.items[key];
    }

    delete(key) { // 通过使用键值来从字典中删除对应的元素
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    has(key) { // 判断给定的键值是否存在于字典中
        return this.items.hasOwnProperty(key);
    }

    clear() { // 清空字典内容
        this.items = {};
    }

    size() { // 返回字典中所有元素的数量
        return Object.keys(this.items).length;
    }

    keys() { // 返回字典中所有的键值
        return Object.keys(this.items);
    }

    values() { // 返回字典中所有的值
        return Object.values(this.items);
    }

    getItems() { // 返回字典中的所有元素
        return this.items;
    }
}
class Graph {
    constructor() {
        this.vertices = []; // 用来存放图中的顶点
        this.adjList = new Dictionary(); // 用来存放图中的边
    }

    // 向图中添加一个新顶点
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    // 向图中添加a和b两个顶点之间的边
    addEdge(a, b) {
        // 如果图中没有顶点a，先添加顶点a
        if (!this.adjList.has(a)) {
            this.addVertex(a);
        }
        // 如果图中没有顶点b，先添加顶点b
        if (!this.adjList.has(b)) {
            this.addVertex(b);
        }

        this.adjList.get(a).push(b); // 在顶点a中添加指向顶点b的边
        this.adjList.get(b).push(a); // 在顶点b中添加指向顶点a的边
    }

    // 获取图的vertices
    getVertices() {
        return this.vertices;
    }

    // 获取图中的adjList
    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        this.vertices.forEach((v) => {
            s += `${v} -> `;
            this.adjList.get(v).forEach((n) => {
                s += `${n} `;
            });
            s += '\n';
        });
        return s;
    }
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertices.forEach((v) => {
    graph.addVertex(v);
});
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());