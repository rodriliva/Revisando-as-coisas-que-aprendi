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





