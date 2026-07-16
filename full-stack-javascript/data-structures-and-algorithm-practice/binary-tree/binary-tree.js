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
    
    insert(value, current = this.root) {
        if (current === null) {
            return newNode(value, null, null);
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
}

function buildTree(array) {
    //Exit condition
    if (array.length === 0) {
        return null
    }

    //Create sorted array of unique values
    let set = new Set(array)
    let arr = [...set].sort((a, b) => a - b)    

    //calculate midpoint
    let mid = Math.floor(array.length / 2);
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

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
// prettyPrint(tree.root)
// console.log(tree.root)
// console.log(tree.includes())