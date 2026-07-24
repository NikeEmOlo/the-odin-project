class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array)
    }

    includes(value, current = this.root) {
        //exit clause
        if (current === null) {
            return false
        }
        //check root
        if (current.data === value) {
            return true
        }
        //return true if either subtree contains the value
        return this.includes(value, current.left) || this.includes(value, current.right)
    }

    findNode(value, current = this.root) {
        //exit clause
        if (current === null) {
            return null
        }
        //check root
        if (current.data === value) {
            return current
        }
        //return the matching node from whichever subtree contains it
        return this.findNode(value, current.left) || this.findNode(value, current.right)
    }

    insert(value, current = this.root) {
        if (current === null) {
            return new Node(value, null, null);
        }

        if (current.data === value) {
            return "Value already exists"
        }

        if (value > current.data) {
            current.right = this.insert(value, current.right);
        } else {
            current.left = this.insert(value, current.left);
        }

        return current;
    }

    delete(value, current = this.root) {
        // Base case
        if (current === null) {
            return 
        }

        //Are you this number?
        if(current.data === value) {
           if(current.left === null && current.right === null) {
                return null
            } else if (current.left === null || current.right === null) { //If one child
                return current.left !== null ? current.left : current.right
            } else if (current.left !== null && current.right !== null) { //if two children
                //take the right node
                let childNode = current.right
                while (childNode.left !== null) {
                    childNode = childNode.left
                }
                current.data = childNode.data
                current.right = this.delete(childNode.data, current.right)
                return current
            }
        } else {
            value > current.data ? current.right = this.delete(value, current.right) : current.left = this.delete(value, current.left)
        }
        return current
    }

    // Function to call a callback on each value in the array - breadth first traversal
    levelOrderForEach(callback) {
        let q = [this.root,]
        let i = 0;
        let results = []

        while (i < q.length) {
            let current = q[i]
            i++
            if (current === null) continue;

            results.push(callback(current.data))

            q.push(current.left)
            q.push(current.right)
        }
        return results
    }

    // Depth-first in-order
    inOrderForEach(callback, current = this.root) {
        if (current === null) {
            return null
        }

        let results = []
        
        if (current.left !== null) results.push(...this.inOrderForEach(callback, current.left))
        results.push(callback(current.data))
        if (current.right !== null) results.push(...this.inOrderForEach(callback, current.right))

        return results
    }

    // Depth first -pre-order traversal
    preOrderForEach(callback, current = this.root) {
        if (current === null) {
            return null
        }

        let results = []
        
        results.push(callback(current.data))
        if (current.left !== null) results.push(...this.preOrderForEach(callback, current.left))     
        if (current.right !== null) results.push(...this.preOrderForEach(callback, current.right))

        return results
    }

    // Depth first -post-order traversal
    postOrderForEach(callback, current = this.root) {
        if (current === null) {
            return null
        }

        let results = []
        
        if (current.left !== null) results.push(...this.postOrderForEach(callback, current.left))     
        if (current.right !== null) results.push(...this.postOrderForEach(callback, current.right))
        results.push(callback(current.data))

        return results
    }

    // Measures the edges from the root to the given value
    depth(value, current = this.root) {
        if (current === null) return null
        if (current.data === value) return 0

        const sub = current.data > value
            ? this.depth(value, current.left)
            : this.depth(value, current.right)

        return sub === null ? null : sub + 1
    }

    // Number of edges on the longest path from the given value down to a leaf
    height(value) {
        const node = this.findNode(value)
        if (node === null) return null

        const measure = (n) => {
            if (n === null) return -1
            return 1 + Math.max(measure(n.left), measure(n.right))
        }

        return measure(node)
    }

    // check if the tree is balanced
    isBalanced(node = this.root) {
        if (node === null) return true;

        const h = (n) => n === null ? -1 : 1 + Math.max(h(n.left), h(n.right));

        if (Math.abs(h(node.left) - h(node.right)) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    //rebalance the tree
    rebalance() {
        let arr = this.inOrderForEach((value) => value)
        this.root = buildTree(arr)
    }

}

function buildTree(array) {
    //Exit condition
    if (array.length === 0) {
        return null
    }

    //Create sorted array of unique values
    let set = new Set(array)
    let arr = [...set].sort((a, b) => a - b)    

    //calculate midpoint (use arr.length — array may contain duplicates that arr dropped)
    let mid = Math.floor(arr.length / 2);
    //split the array into left and right at the splitPoint
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)
    //create new node with left and right half
    let root = new Node(arr[mid], buildTree(left), buildTree(right))

    return root
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}
//=======================TESTING
// let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// prettyPrint(tree.root)
// // console.log(tree.root)
// // console.log(tree.includes())
// // console.log(tree.delete())
// // tree.levelOrderForEach()
// console.log(tree.inOrderForEach((value) => value * 3))
// console.log(tree.preOrderForEach((value) => value * 1))