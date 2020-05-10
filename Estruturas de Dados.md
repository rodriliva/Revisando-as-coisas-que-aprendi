# Estrutura de Dados

Criando um array
``` 
let nomes = ['Rodrigo', 'Giovanni', 'Larissa', 'Eduardo']
ou 
let nomes = new Array('Rodrigo', 'Giovanni', 'Larissa', 'Eduardo')
``` 
Substitui o index do elemento
``` 
nomes[0] = 'Sérgio'
// let nomes = ['Sérgio', 'Giovanni', 'Larissa', 'Eduardo', 'Bianca']
``` 

## Stack (Pilha)
**LIFO - Last In First Out**

Coloca um elemento no começo
```
nomes.unshift('Fernando') 
// let nomes = ['Fernando','Rodrigo', 'Giovanni', 'Larissa', 'Eduardo',]
}
```

Tira um elemento do começo
```
nomes.shift()
// let nomes = ['Giovanni', 'Larissa', 'Eduardo']
```

## Queue (Fila)
**FIFO - First In First Out**

Coloca um elemento no final
```
nomes.push('Fernando')
// let nomes = ['Rodrigo', 'Giovanni', 'Larissa', 'Eduardo', 'Bianca', 'Fernando']
```
Tira um elemento do final 

```
nomes.pop()
// let nomes = ['Rodrigo', 'Giovanni', 'Larissa']

```

## Linked Lists
Listas que possuem o node e a referência do próximo node 

A Função:
```
function LinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        var node = new Node(element),
        current 

        if(head === null) {
            head = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }
        length++
    }

    this.insert = function(position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0) {
                node.next = current
                head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        if(position > - 1 && position < length) {
            var current = head,
            previous,
            index = 0

            if(position === 0) {
                head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) {
        var current = head,
        index = 0

        while(current) {
            if(element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        console.log(this.toString())
    }
}
```
Métodos:
```
//Criar a Lista
var ll = new LinkedList()

//Adicionar Item
ll.append('Maria')
ll.append('João')
ll.append('José')

//Console.log a lista
ll.print()

//Remover item especifico
ll.remove('José')

//Remover por index
ll.removeAt(1)

//Saber a posição de algum elemento
ll.indexOf('João')

//Inserir na posição desejada
ll.insert(0, 'João')

//Essa lista está vazia?
ll.isEmpty()

//O tamanho da lista
ll.size()

//Pegar o index 0
ll.getHead()
```

## Doubly Linked Lists
Uma lista linkada que tambem tem referência do node anterior
```
function DoublyLinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
        this.prev = null
    }

    var length = 0
    var head = null
    var tail = null

    this.append = function(element) {
        var node = new Node(element),
        current 

        if(head === null) {
            head = node
            tail = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }
            current.next = node
            tail = node
        }
        length++
    }

    this.insert = function(position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0) {
                if(!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if(position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        if(position > - 1 && position < length) {
            var current = head,
            previous,
            index = 0

            if(position === 0) {
                head = current.next

                if(length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if(position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) {
        var current = head,
        index = 0

        while(current) {
            if(element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        console.log(this.toString())
    }
```

## Set
Um conjunto de dados que não permite entradas duplas

```
function Set() {
    var items = {}

    this.add = function(value) {
        if(!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function(value) {
        if(this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    this.clear = function() {
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.values = function() {
        var values = [],
        keys = Object.keys(items)
        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.union = function(otherSet) {
        var unionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    this.difference = function(otherSet) {
        var differenceSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }

    this.subset = function(otherSet) {
        if(this.size() > otherSet.size()) {
            return false
        } else {
            var values = this.values()

            for(var i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}
```

## Dictionary
Uma forma de estrutura que existe que demanda uma chave e valor 

pode ser utilizado objetos literais ou 
```
function Dictionary() {
    var items = {}

    this.set = function(key, value) {
        items[key] = value
    }

    this.delete = function(key) {
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function() {
        items = {}
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.values = function() {
        var values = [],
        keys = Object.keys(items)

        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function() {
        return items
    }
}
```
## Hashes
Um Dictionary que usa uma função de espelhamento pra gerar um index para a chave e valor
```
function HashTable() {
    var table = []

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    var loseloseHashCode = function(key) {
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() {
        return table.length
    }
}
```
Tratando colisões:
```
//precisa utilizar em conjunto a classe LinkedList (lista ligada)
function LinkedList() {
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element) {
        var node = new Node(element),
        current 

        if(head === null) {
            head = node
        } else {
            current = head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }
        length++
    }

    this.insert = function(position, element) {
        if(position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous,
            index = 0

            if(position === 0) {
                node.next = current
                head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function(position) {
        if(position > - 1 && position < length) {
            var current = head,
            previous,
            index = 0

            if(position === 0) {
                head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element) {
        var current = head,
        index = 0

        while(current) {
            if(element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function() {
        return length === 0
    }

    this.size = function() {
        return length
    }

    this.getHead = function() {
        return head
    }

    this.toString = function() {
        var current = head,
        string = ''

        while(current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function() {
        console.log(this.toString())
    }
}

function HashTable() {
    var table = []

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        
        if(table[position] === undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }

    this.remove = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key === key) {
                    table[position].remove(current.element)
                    if(table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if(current.element.key === key) {
                table[position].remove(current.element)
                if(table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    this.get = function(key) {
        var position = loseloseHashCode(key)

        if(table[position] !== undefined) {
            var current = table[position].getHead()

            while(current.next) {
                if(current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if(current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    var loseloseHashCode = function(key) {
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() {
        return table.length
    }
}
```
## Tree
Uma estrutura binária que vai se desmembrando em duas outros node em relação de parentesco
```
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    this.insert = function(key) {
        var newNode = new Node(key)

        if(root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    
    var insertNode = function(node, newNode) {
        if(node.key > newNode.key) {
            if(node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    this.search = function(key) {
        return searchNode(root, key)
    }

    var searchNode = function(node, key) {
        if(node === null) {
            return false
        }
        if(key < node.key) {
            return searchNode(node.left, key)
        } else if(key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    this.remove = function(key) {
        root = removeNode(root, key)
    }

    var removeNode = function(node, key) {
        if(node === null) {
            return null
        }
        if(key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if(key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            if(node.left === null && node.right === null) {
                node = null
                return node
            }
            if(node.left === null) {
                node = node.right
                return node
            } else if(node.right === null) {
                node = node.left
                return node
            }
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }

    var findMinNode = function(node) {
        while(node && node.left !== null) {
            node = node.left
        }
        return node
    }

    this.min = function() {
        return minNode(root)
    }

    var minNode = function(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    this.max = function() {
        return maxNode(root)
    }

    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback)
    }

    var inOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback)
    }

    var preOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback)
    }

    var postOrderTraverseNode = function(node, callback) {
        if(node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
}

function printNode(value) {
    console.log(value)
}
```

## Grafos
## Ordenação