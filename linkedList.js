// const nodeB = {
//     value: 2,
//     nextNode: null,
// }

// const nodeA = {
//     value: 1,
//     nextNode: nodeB,
// }

// const LinkedList = {
//     head: nodeA,
// }




class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value)
        } else {
            let current = this.head
            while (current.nextNode !== null) {
                current = current.nextNode
            }
            current.nextNode = new Node(value)
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value)
        } else {
            let pointer = this.head
            this.head = new Node(value, pointer)
        }
    }

    size() { //return the total number of nodes in the list
        if (this.head === null) {
            return 0;
        } else {
            let count = 1;
            let current = this.head
            while (current.nextNode !== null) {
                count++
                current = current.nextNode
            }
            return count;
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}


let list = new LinkedList
list.append("Amy")
list.append("Joe")
list.prepend("Aaron")
list.append("Xaden")
console.log(JSON.stringify(list, null, 2));
console.log(list.size())
