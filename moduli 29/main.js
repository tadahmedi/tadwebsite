var programinglanguages = ['JS','PHP','PYTHON'];

console.log(programinglanguages);

programinglanguages.push('JAVA');
console.log(programinglanguages);

programinglanguages.pop()
console.log(programinglanguages);

programinglanguages.unshift('c#');
console.log(programinglanguages);

programinglanguages.shift();
console.log(programinglanguages);

programinglanguages.splice(0,2,'ruby');
console.log(programinglanguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));

var students = ['sdn1','sdn2']

var [s1,s2] = students

console.log(s1)
console.log(s2)

var places = ['prishtine','prizren','peje']

var [firstplace,secondplace] = places

console.log(secondplace)

var numbers = [1,2,3,4,5,6,7,8,9,10]

var[first,second, ...othernumbers] = numbers

console.log(first)
console.log(second)
console.log(othernumbers.toString())
