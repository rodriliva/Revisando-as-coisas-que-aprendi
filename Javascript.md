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

**Objetos Construtores**
```
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
```

## Arrays
**Array simples**

`` 
var arrayName = [item1, item2, ...]; 
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

**slice()** Corta um pedaço de um array em outro array

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

**Organizando alfabéticamente**
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Organiza alfabeticamente
fruits.reverse();     // Organiza igual só que reversamente
```

**Metodo pra fazer um sort só que com números**
```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

**Math.max() e Math.min()**
```
Math.min()
Achando o maior número do array:

Math.max.apply(Math, nomeDoArray) 

Math.min()
Achando o menor número do array:

Math.min.apply(Math, nomeDoArray) 
```

**Especifidades do método sort**

```
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:

cars.sort(function(a, b){return a.year - b.year});

Comparing string properties is a little more complex:

Example
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
```

**Array.forEach()** Chama uma função pra cada elemento do array

```
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
```

**Array.map()** cria um novo array perfomando uma função em cada elemento do array
```
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

ou

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
```

**Array.filter()** Cria um novo array que passa pelo filtro de uma função teste
```
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
```

**Array.reduce()** Executa uma função pra produzir ou reduzir um array pra um valor único
```
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

ou 

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

**Array.every()**
Checa se todos os valores de terminado array passam no teste
```
This example check if all array values are larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
 ou 
 
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
```

**Array.some()**
checa se os valores de determinado array passam por uma função teste 
```
This example check if some array values are larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

**Array.indexOf()** Procura no array por um elemento que tenha o valor e returna sua posição
```
Procura pelo item  "Apple":

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

Se aparece mais de uma vez retorna a primeira vez que aparece

```

**Array.find()** retorna o valor do primeiro elemento do array que passa por uma função teste

```
Exemplo que retorna o primeiro valor maior que 18

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note que a função tem 3 atributos

O item valor
O item index
O Array
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
x.toPrecision();        // retorna 9.656
x.toPrecision(2);       // retorna 9.7
x.toPrecision(4);       // retorna 9.656
x.toPrecision(6);       // retorna 9.65600
```
**parseInt()**
Retorna o número inteiro

```
parseInt("10");         // retorna 10
parseInt("10.33");      // retorna 10
parseInt("10 20 30");   // retorna 10
parseInt("10 years");   // retorna 10
parseInt("years 10");   // retorna NaN
```

## Math
**PI**

``
Math.PI;            // retorna 3.141592653589793
``

**Potência**

``
Math.pow(8, 2);      // retorna 64
``

**Raiz quadrada**

``
Math.sqrt(64);      // retorna 8
``

**Valor positivo**

``
Math.abs(-4.7);     // retorna 4.7
``

**Arredonda pra cima**

``
Math.ceil(4.4);     // retorna 5
``

**Arredonda pra baixo**

``
Math.floor(4.7);    // retorna 4
``

**Arredondar pro valor inteiro mais próximo**

```
Math.round(4.7);    // retorna 5
Math.round(4.4);    // retorna 4
```

**Minimo e Máximo**
```
Math.min(0, 150, 30, 20, -8, -200);  // retorna -200
Math.max(0, 150, 30, 20, -8, -200);  // retorna 150
```

**Número Aleatório**

``
Math.random();     // retorna um número aleatório entre 0 e 1
``




## Datas
**Nova data**

``
var d = new Date()
``

**Métodos de data**
```
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.
```

## Condicionais

**if** 
Especificar um block de código pra ser executado se a condição especificada é true
```
if (hour < 18) {
  greeting = "Good day";
}
```

**else** 
Especificar um block de código pra ser executado se a condição especificada é false
```
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

**else if** 
Especificar uma nova condição se a primeira deu false
```
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```
**switch** 
Varias alternativas pra o código ser executado
```
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

## Loops

**for** loops dentro de um código um número de vezes
```
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```
**for/in** - loops dentro de uma propriedade de objeto
```
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```
**for/of** - loops dentro de um valor de um objeto
```
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}
```
**while** - loops dentro de um código enquanto a condição for true
```
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```
**do/while** - Tambem loops dentro de um código enquanto a condição for true
```
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```


