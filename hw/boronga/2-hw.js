// # 链表的后序遍历
// 用迭代的方式写出单向链表后序遍历。

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

    append(data){
        var nextVal = this
        while(nextVal.next){
            nextVal = nextVal.next
        }
        nextVal.next = new Node(data)
        // if(this.next){
        //     this.next.append(data)
        // }else{
        //     this.next = new Node(data)
        // }
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append_head(data){
        this.length++;
        let headed = this.head;
        this.head = new Node(data);
        this.head.next = headed;
    }

    append(data){
        if(this.head){
            this.head.append(data)
        }else{
            this.head = new Node(data)
        }
        this.length++;
    }
    
    get(index){
        if(index > this.length - 1 || this.length === 0){
            return;
        }
        let date = this.head
        for(let count = 0; count < this.length; count++){
            if(count === index){
                return date.data
            }else{
                date = date.next
            }
        }
        return;
    }
    
}

/**
 * 利用递归的特性 先深入再打印
 * @param {后序遍历的list} list 
 */
function postList(list){
    function postInternal(node){
        if(node){
            postInternal(node.next)
            console.log(node.data)
        }else{
            return
        }
    }
    return postInternal(list.head)
}

/* let list = new LinkedList()
list.append('test')
list.append('test2')
list.append('test3')
list.append('test4')
// console.log(list)
postList(list) */
    



// # 可中途中断的树遍历
// 第五课中我们学习了二叉树。写了前、中、后序遍历。但是都是一次性遍历所有的节点。在日常的软件工程中，通常不用遍历所有的数据，遇到某些条件可以终止。
class Element{
    constructor(data){
        this.data = data; 
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(node){
        this.head = node;
    }
    append(node){
        // 添加到左分支还是右分支
        this.appendNode(node,this.head)
    }

    appendNode(node, currentNode){
        if(currentNode.data >= node.data){
            if(currentNode.left === null){
                currentNode.left = node
            }else{
                this.appendNode(node,currentNode.left)
            }
        }else{
            if(currentNode.right === null){
                currentNode.right = node
            }else{
                this.appendNode(node,currentNode.right)
            }
        }
    }
    traversal(order, f){
        this.traversalInner(order,f,this.head)
    }
    traversalInner(order,f,currentNode){
        if(!currentNode){
            return;
        }
        if(order === 'pre'){
            if(f(currentNode)){
                console.log(currentNode)
                return;
            }
        }
        this.traversalInner(order,f,currentNode.left)
        if(order === 'in'){
            if(f(currentNode)){
                console.log(currentNode)
                return;
            }
        }
        this.traversalInner(order,f,currentNode.right)
        if(order === 'post'){
            if(f(currentNode)){
                console.log(currentNode)
                return;
            }
        }
    }
} 

function preConsole(message,element){
    if(!element){
        return;
    }
    if(message === 'pre'){
        console.log(element.data)
    }
    preConsole(message,element.left)
    if(message === 'in'){
        console.log(element.data)
    }
    preConsole(message,element.right)
    if(message === 'post'){
        console.log(element.data)
    }

}

let element = new Element(5)
let tree = new Tree(element)
tree.append(new Element(9))
tree.append(new Element(19))
tree.append(new Element(1))
tree.append(new Element(0))
tree.append(new Element(2))
preConsole('pre',element)

// 请写一个可以中途终止的遍历。有如下两种接口之一：
// ### 接口 1
// ```js
// let tree = new Tree();

// tree.traversal('pre/in/post', (element) => {
//     ...
//     return true/false
// })
// ```
// 这里的遍历函数接受一个字符串表示哪种顺序，和一个匿名函数。每遍历一个节点就执行这个函数。如果函数返回 true 则继续执行。如果返回 false，则停止遍历。
tree.traversal('pre',function(element){
    return element.data > 6
})
// ### 接口 2
// 如果你对设计范式有一定的了解，那么，请将上面的实现改为迭代器。
// ```js
// let tree = new Tree();
// let iterTree = tree.iter('pre/in/post');    // 哪一种顺序
// iterTree.next()     // 返回第一个节点的data
// iterTree.next()     // 返回第第二个节点的data
// iterTree.next()     // 如果已经没有新的节点可以遍历，那么请返回一个错误。取决于你使用的语言，可以选择抛出异常或者返回（数值，错误）对。
// ```
