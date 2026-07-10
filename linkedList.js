//  1. The node class
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}


// 2. The linked list class
class LinkedList {
    constructor() {
        this.head = null
    }

    // Adds a new node to the end of the list
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

    // Adds a new node to the start of the list
    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value)
        } else {
            let pointer = this.head
            this.head = new Node(value, pointer)
        }
    }

    // Returns the total number of nodes in the list
    size() {
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

    // returns the value of the head node
    getHead() {
        if (this.head === null) {
            return undefined
        } else {
            return this.head
        }
    }

    // returns the value of the last node
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

    // returns the value of the node at the given index
    at(index) {
        if (this.head === null) {
            return undefined
        } else {
            let current = this.head
            let count = 0;
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

    // Removes the first node from the list
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

    // Returns true if the given value is in the list, otherwise false
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

    // Returns the index of the node containing the given value, or -1 if not found
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

    // Converts node values to a formatted string in console
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

    // Extra credit 1: Inserts new nodes with the given values at the provided index position
    insertAt(index, ...values) {
        if (this.size() <= index || index < 0) {
            throw new RangeError(`Index out of bounds`)
        }

        if (this.head === null) {
            values.forEach((value) => {
                this.append(value)
            })
        } else {
            if (index === 0) {
                // prepend items in reverse order
                for (let i = values.length; i > 0; i--) {
                    this.prepend(values[i - 1])
                }
            } else {
                let current = this.at(index - 1)
                let end = current.nextNode
                values.forEach((value) => {
                    current.nextNode = new Node(value)
                    current = current.nextNode
                })
                current.nextNode = end
            }
        }
        return this.toString()
    }

    // Extra credit 2: Remove the node at the given index
    removeAt(index) {
        if (this.head === null) {
            throw new Error("The list is already empty")
        }
        if (index < 0 || index >= this.size()) {
            throw new RangeError(`Index out of bounds`)
        }

        if (index === 0) {
            this.pop()
        } else {
            let parent = this.at(index -1)
            let target = parent.nextNode
            let child = target.nextNode

            parent.nextNode = child
        }

        return this.toString()
    }
}

// Testing values
let list = new LinkedList
list.append("Amy")
list.append("Joe")
list.append("Joe")
list.prepend("Aaron")
list.append("Xaden")
list.append("Zaine")
list.append("Simeon")
list.append("Chris")
list.append("Jimmy")
// console.log(JSON.stringify(list, null, 2));
// console.log(list.size())
// console.log(list.getHead())
// console.log(list.getTail())
// console.log(list.at(0))
// console.log(list.pop())
// console.log(list.contains("Paul"))
// console.log(list.findIndex("Xaden"))
// console.log(list.toString())
// console.log(list.insertAt(1, "Persephone", "Maggie", "Harmony"))
// console.log(list.removeAt(8))
