# Javascript
## O Básico
### Colocando o arquivo Javascript no HTML

``
/<script src="myScript1.js"></script>
``

### Tipos de Variáveis
**Pode ser acessada de qualquer parte do código**

``
var x = 5;
``

**Funciona apenas dentro de um escopo**

``
let x = 5;
``

**Let que não pode ser alterado**

``
const x = 5;
``

### Comentários
``
//Comentar uma linha
``

``
/*Comentar um bloco*/ 
``
### Operações de Atribuição 

```
+= é o mesmo que x = x + y
-= é o mesmo que x = x - y
*= é o mesmo que x = x * 
/= é o mesmo que x = x / y
%= é o mesmo que x = x % y
**= é o mesmo que x = x ** y
```


### Operações de Atribuição 
```
==	Valor igual
===	Valor e Tipo igual
!=	Não Igual
!==	Não é igual de valor e tip>	Maior qu
<	Menor qu
>=	Maior ou igual
<=	Menor ou igua
?	ternary operator
```

### Operadores Lógicos

```
&&	E
||	Ou
!	Não é igual
```

### Operações de Tipo

```
typeof	Retorna o tipo de variável
instanceof	Retorna true se um objeto é da 
```

## Funções
**Função Comum**
```
function myFunction(p1, p2) {
  return p1 * p2;
}
```
**Função Arrow**
```
let function = (p1, p2) => {
  return p1 * p2;
}
```

## Objetos
**Objeto Simples**
```
var car = {type:"Fiat", model:"500", color:"white"};
```
**Acessando atributos**
```
person.lastName;
```
**Colocando funções como atributo**
```
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
## Arrays
**Array simples**

`` 
var arrayName = [item1, item2, ...]; 
`` 

**Colocando arrays em variaveis**

``
var cars = new Array("Saab", "Volvo", "BMW");
``

**Acessando valores de array pelo índice**

``
var name = cars[0];
``

**Substituindo valores de array**

```
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
cars[0] = "Opel";
```

**toString()** Retorna um array separado em virgulos 

```
Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:

Banana,Orange,Apple,Mango
```

**join(" * ")** Retorna um array mas você pode definir o separador
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:

Banana * Orange * Apple * Mango
```

**pop()** Remove o ultimo elemento do array
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
```

**Shifting Elements** Remove o primeiro elemento do array
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
```

**Forma diferente de adicionar um elemento na array** 

``
fruits[fruits.length] = "Kiwi"
``

**Remove um elemento do array** 

``
delete fruits[0]
``

**splice()**  Adicionar itens no Array
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

O primeiro parametro (2) define a posição onde os elementos devem ser adicionados (spliced in).

O segundo parametro (0) define quantos elementos devem ser removidos

O resto dos parametros ("Lemon" , "Kiwi") define os novos elementos a ser adicionados


Usando splice() pra remover elementos

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);        // Removes the first element of fruits
O primeiro parametro (0) Define onde os elementos vão ser inseridos(spliced in).

O segundo parametro (1) define quantos elementos vão ser removidos

O resto do parametro são omitidos, nenhum elemento vai ser adicionado.
```

**concat()**
Cria um novo array concatenando outros dois arrays

```
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
```

**Slicing an Array** Corta um pedaço de um array em outro array

```
Esse exemplo slices out uma parte do array começando pelo elemento 1 ("Orange")

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

O metodo slice() cria um novo array. Não remove nenhum elemento do array original.

Esse exemplo slices out uma parte do array começando pelo elemento 3 ("Apple")

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);

O metodo slice() pode pegar dois argumentos como slice(1, 3). Dessa forma ele seleciona elementos que iniciam e terminam (não incluindo) o ultimo argumento.

Example
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

Se o ultimo argumento é omitido ele corta o restante do array
Example
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
```


## Metódos
**toFixed()** Retorna uma string, com os números escritos com um número especifico de decimais

```
var x = 9.656;
x.toFixed(0);           // retorna 10
x.toFixed(2);           // retorna 9.66
x.toFixed(4);           // retorna 9.6560
x.toFixed(6);           // retorna 9.656000
```

**toPrecision()** Retorna uma string com o número escrito com um número definido de caracteres 

```
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```
**parseInt()**
Retorna o número inteiro

```
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN
```

