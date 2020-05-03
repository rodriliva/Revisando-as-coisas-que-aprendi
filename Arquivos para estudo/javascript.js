txt = ""
var person = {fname:"John", lname:"Doe", age:25};

for (x in person) {
  txt += person[x]+ " ";
}

console.log(txt)