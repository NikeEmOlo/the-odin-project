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

    getHead() {
        if (this.head === null) {
            return undefined
        } else {
            return this.head
        }
    }

    getTail() {
        if (this.head === null) {
            return undefined
        } else {
            let current = this.head
            while (current.nextNode !== null) {
                current = current.nextNode
            }
            return current
        }
    }

    at(index) {
        if (this.head === null) {
            return undefined
        } else {
            let current = this.head
            let count = 1;
            while (current.nextNode !== null) {
                if(count === index) {
                    break;
                }
                count++
                current = current.nextNode
            }
            if (count !== index && current.nextNode === null) {
                return undefined
            } else {
                return current
            }
        }
    }

    pop() {
        if (this.head === null) {
            return undefined
        } else {
            let secondNode = this.head.nextNode
            let firstNode = this.head
            this.head = secondNode
            return this.head
        }
    }

    contains(data) {
        if (this.head === null) {
            return false
        } else {
            let current = this.head
            while (current.nextNode !== null) {
                if (current.value === data) {
                    return true
                } else {
                    current = current.nextNode
                }
            }
            return false
        }
    }

    findIndex(data) {
        if (this.head === null) {
            return -1
        } else {
            let current = this.head
            let count = 1
            while (current.nextNode !== null) {
                if (current.value === data) {
                    return count
                } else {
                    current = current.nextNode
                    count++
                }
            }
            return -1
        }
    }

    toString() {
        if (this.head === null) {
            return ""
        } else {
            let current = this.head
            let array = []
            while (current.nextNode !== null) {
                array.push(current.value)
                current = current.nextNode
            }
            array.push(current.value)
            array.push("null")
            return array.join(" >> ")
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
list.append("Joe")
list.prepend("Aaron")
list.append("Xaden")
list.append("Zaine")
list.append("Simeon")
list.append("Chris")
console.log(JSON.stringify(list, null, 2));
// console.log(list.size())
// console.log(list.getHead())
// console.log(list.getTail())
// console.log(list.at(7))
// console.log(list.pop())
// console.log(list.contains("Paul"))
// console.log(list.findIndex("Xaden"))
console.log(list.toString())

