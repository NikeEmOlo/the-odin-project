class LinkedList {
    constructor() {
        this.head = null
    }

    // Returns the total number of nodes in the list
    size() {
        if (this.head === null) {
            return 0;
        } else {
            let count = 0;
            let current = this.head
            while (current !== null) {
                count++
                current = current.nextNode
            }
            return count;
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = value
        } else {
            let pointer = this.head
            this.head = value
            this.head.nextNode = pointer
        }
    }

    findValue(key) {
        let current = this.head
        while (current !== null) {
            let nodeKey = Object.keys(current).find(k => k !== "nextNode")
            if (nodeKey === key) {
            return current[nodeKey]
            }
            current = current.nextNode
        }
        return null
    }

    findIndex(key) {
        if (this.head === null) {
            return null
        } else {
            let current = this.head
            let count = 0
            while (current !== null) {
                let nodeKey = Object.keys(current).find(k => k !== "nextNode")
                if (nodeKey === key) {
                    return count
                } else {
                    current = current.nextNode
                    count++
                }
            }
            return null
        }
    }

        // returns the value of the node at the given index
    at(index) {
        if (index < 0 || index >= buckets.size()) {
            throw new Error("Trying to access index out of bounds");
        }    
        if (this.head === null) {
            return undefined
        } else {
            let current = this.head
            let count = 0;
            while (current !== null) {
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

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            throw new Error("Trying to access index out of bounds");
        }
        if (index === 0) {
            this.head = null
        } else {
            let parent = this.at(index -1)
            let target = parent.nextNode
            let child = target.nextNode

            parent.nextNode = child
        }

        return
    }
}

class Node {
    constructor(key, value, nextNode = null) {
        this[key] = value;
        this.nextNode = nextNode;
    }
}

class HashMap {
    constructor() {
        this.hm = [];
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.keyCount = 0;

        while (this.hm.length < this.capacity) {
            this.hm.push(new LinkedList)
        }
    }
    
    // The hash function
    hash(key) {
        let hashCode = 0;
        let bucket;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            bucket = hashCode % this.capacity
        }

        return bucket
    }

    // Add items to the hashMap
    set(key, value) {
        let bucket = this.hm[this.hash(key)]
        let newNode = new Node(key, value)

        bucket.prepend(newNode)
        this.keyCount++
        this.checkLoadCapacity()
    }

    // Retrieves the value of the given key
    get(key) {
        let bucket = this.hm[this.hash(key)]
        return bucket.findValue(key)
    }

    // Checks to see if a key is in the hashmap
    has(key) {
        let bucket = this.hm[this.hash(key)]
        return bucket.findValue(key) !== null ? true : false
    }

    // Removes an entry determined by the input key
    remove(key) {
        let bucket = this.hm[this.hash(key)]
        let j = this.has(key)
        let i = bucket.findIndex(key)

        if (i !== null && j === true) {
            bucket.removeAt(i)
            this.keyCount--
        } else {
            return "No key found"
        }

        return bucket
    }

    //Clears the hashmap
    clear() {
        this.hm = [];
        while (this.hm.length < this.capacity) {
            this.hm.push(new LinkedList)
        }
    }

    // Returns an array containing all the keys inside the hashmap
    keys() {
        let allKeys = []
        this.hm.forEach((bucket) => {
            if (bucket !== null) { 

                let current = bucket.head
                let bucketKeys = []
                while (current !== null) {
                    bucketKeys = Object.keys(current).find(k => k !== "nextNode")
                    allKeys.push(bucketKeys)
                    current = current.nextNode
                }
            }
        })
        return allKeys
    }

    //Returns an array of all values inside the hashmap
    values() {
        let allValues = []
        this.hm.forEach((bucket) => {
            if (bucket !== null) {
                let current = bucket.head
                let currentKey;
                while (current !== null) {
                    currentKey = Object.keys(current).find(k => k !== "nextNode")
                    allValues.push(current[currentKey])
                    current = current.nextNode
                }
            }
        })
        return allValues
    }

    // Prints an array of key-value pairs
    entries() {
        let entries = []
        this.hm.forEach((bucket) => {
            if (bucket !== null) {
                let current = bucket.head
                while (current !== null) {
                    let key = Object.keys(current).find(k => k !== "nextNode")
                    let value = current[key]
                    let pair = [key, value]
                    entries.push(pair)
                    current = current.nextNode
                }
            }
        })
        return entries
    }

    // Doubles the hashmap size when loadFactor is reached and rehashes entries
    checkLoadCapacity() {
        const expandHashMap = () => {
            let entries = this.entries()
            this.capacity = this.capacity * 2
            this.clear()
            this.keyCount = 0
            entries.forEach(([key, value]) => {
                this.set(key, value)
            })
        }

        (this.keyCount / this.capacity) > this.loadFactor ? expandHashMap() : null  
    }
}

// Extra credit: 
// Create a HashSet class that behaves the same as a HashMap but only contains keys with no values
class HashSet {
    constructor() {
        this.hs = [];
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.keyCount = 0;

        while (this.hs.length < this.capacity) {
            this.hs.push(new Set)
        }
    }
    
    // The hash function
    hash(key) {
        let hashCode = 0;
        let bucket;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            bucket = hashCode % this.capacity
        }

        return bucket
    }

    // Add items to the hashMap
    set(key) {
        let set = this.hs[this.hash(key)]
        set.add(key)
        this.keyCount++
        this.checkLoadCapacity()
    }

    // Checks to see if a key is in the hashmap
    has(key) {
        return this.hs[this.hash(key)].has(key)
    }

    // Removes an entry determined by the input key
    remove(key) {
        return this.hs[this.hash(key)].delete(key) ? this.keyCount-- : "Key not found"
    }

    //Clears the hashmap
    clear() {
        this.hs = [];
        while (this.hs.length < this.capacity) {
            this.hs.push(new Set)
        }
    }

    // Returns an array containing all the keys inside the hashmap
    keys() {
        let allKeys = []
        this.hs.forEach((set) => {
            if (set.size > 0){
                allKeys.push(...set)
            }
        })
        return allKeys
    }

    // Prints an array of all keys
    entries() {
        return console.log(this.hs.keys())
    }

    // Doubles the hashmap size when loadFactor is reached and rehashes entries
    checkLoadCapacity() {
        const expandHashMap = () => {
            let keys = this.keys()
            this.capacity = this.capacity * 2
            this.clear()
            this.keyCount = 0
            keys.forEach((key) => {
                this.set(key)
            })
        }

        (this.keyCount / this.capacity) > this.loadFactor ? expandHashMap() : null  
    }
}



// ================================ Testing
// let hm = new HashMap

// hm.set('apple', 'red')
// hm.set('banana', 'yellow')
// hm.set('carrot', 'orange')
// hm.set('dog', 'brown')
// hm.set('elephant', 'gray')
// hm.set('frog', 'green')
// hm.set('grape', 'purple')
// hm.set('hat', 'black')
// hm.set('ice cream', 'white')
// hm.set('jacket', 'blue')
// hm.set('kite', 'pink')
// hm.set('lion', 'golden')
// hm.set('moon', 'silver')

// let hs = new HashSet

// hs.set('apple')
// hs.set('banana')
// hs.set('carrot',)
// hs.set('dog')
// hs.set('elephant')
// hs.set('frog')
// hs.set('grape')
// hs.set('hat')
// hs.set('ice cream')
// hs.set('jacket')
// hs.set('kite')
// hs.set('lion')
// // hs.set('moon')
