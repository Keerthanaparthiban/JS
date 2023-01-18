// alert('Hello keerthana');
console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');

// var - global scope, let and const mostly used - added with ECMA script 6
// var can cause conflicts coz its global scope

// let allows reassign values
let age = 20;
age = 30;
console.log(age);
// will reassign 30 to age

// constant varible cannot be directly reassigned and will throw an assignment type error
// while dealing with arrays and objects can reassign the data using const

// const score = 20;
// score = 30;
// console.log(score);

// primitive data type - string, number, boolean, symbols, undefined, null
// complex - objects/array

const nam = 'keerthana';
const num = 22;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined as well, can't assign const z coz const needs to be initialzed with a value always


// datatype of variables

console.log("name =",typeof nam);
console.log("age =",typeof num);
console.log("rating =",typeof rating);
console.log("cool =",typeof isCool);
console.log("x =",typeof x); // not an object. it is NULL. a bogus return type 
console.log("y =",typeof y);
console.log("z =",typeof z);

// concatenation - old way
console.log('My name is '+nam+' i am '+num);

// new concat way - using template stringss - using backticks
const hello = `My name is ${nam} and i am ${age}`;
console.log(hello);


const s = 'Hello world!';
console.log(s.length) // length property

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5)); // start and end index
console.log(s.substring(0,5).toUpperCase()); // start and end index and change to uppercase

const l = 'technology, computers, IT, code';
console.log(l.split(', ')); // array with 4 values separated with space

//ARRAYS - variables that hold multiple values

// using constructors
const numberss = new Array(1,2,3,4,5);
console.log(numberss);

const fruit = ['apple','pears','orange','fig','banana']
console.log(fruit); 

// note in js - arrays can have multiple datatypes unlike other prg languages. An array can have a boolean, string, number etc values in it
// js is not staticly typed - const name:string - typescript a superset js has this staticly typed feature

console.log(fruit[1]);

fruit[3] = 'grapes';
console.log(fruit);

// note : we have used const- can add values to the array, can manipulate but cannot reassign it entirely

// to add values to array in an efficient way we can use push method - push values to the end of an array

fruit.push('mangoes');
fruit.push('fig');

console.log(fruit);

// to add values at the beginning use - unshift
fruit.unshift('fig');
console.log(fruit);

// to remove a value use pop - remove value from the end.

fruit.pop();
console.log(fruit);

// to check if it's an array

console.log(Array.isArray(fruit)); // returns true
console.log(Array.isArray('Hello')); //returns false
console.log(Array.isArray('hello','hola','comma cava','vanakkam')); //false

// to get the index of a value

console.log(fruit.indexOf('orange')) // will return 3. but if u try to get the index of a value that doesnt exist it will return -1

//OBJECTS
// like a key value pair

const person = {
    firstname : 'Keerthana',
    lastname : 'P',
    agee : 22,
    hobbies : ['music','movies','artwork'],
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    }
};
//address is an embedded object in the object person
console.log(person);
console.log(person.firstname,person.lastname,person.agee) // log mutiple values at a time


// log movies
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructing - making the key an actual variable

const { firstname, lastname, hobbies, address: {city} } = person;
console.log(hobbies);

console.log(city);

// add properties to the person obj

person.email = 'keerthana23222@gmail.com';

console.log(person.email);


// array todos of objects 3
// creating a to-do array

const todos = [
    {
        id: 1,
        task: 'drink tea',
        isCompleted: true
    },
    {
        id: 2,
        task: 'take out trash',
        isCompleted: false
    },
    {
        id: 3,
        task: 'study',
        isCompleted: true
    }
];

console.log(todos);
console.log(todos[1].task) // print out the task property of the second obj of the array

// send data to a server - json format
// json.stringify will let u format the objects or array into json

const jsontodo = JSON.stringify(todos);
console.log(jsontodo);

// LOOPS

// for loops
for (let i = 0; i<10; i++) {
    console.log(`for loop number: ${i}`);
}

// while
let j = 0;
while (j<10) {
    console.log(j);
    j++;
}

// loop through arrays
for (let i = 0; i<todos.length; i++) {
    console.log(`todos loop number: ${i}`);
}

// not the best way to loop through array
for (let i = 0; i<todos.length; i++) {
    console.log(todos[i].task);
}

for( let todo of todos) {
    console.log(todo);
}

for( let todo of todos) {
    console.log(todo.task);
}

//forEach, map

// Note that the forEach() method is synchronous, meaning that it will execute the provided function 
// for each element in the array one at a time, 
//and it will not move on to the next element until the provided function has completed execution for the current element.

todos.forEach(function(tod) {
    console.log(tod.isCompleted);
});

// using arrow function

todos.forEach(n => console.log(n));

//tod is the variable of function
// todos array each object is been retrieved take in a  function and each obj given a variable. Wrt value is returned


// JavaScript, the map() method is used to create a new array with the 
// results of calling a provided function on every element in the calling array. The map() method does not change the original array.
//map - returns an array so assign a var

const text= todos.map(function(mf) {
    return mf.task;
});

console.log(text); // will return the task as arrays

const ret = todos.map(function(iscom) {
    return iscom.id;
})

console.log(ret);

// filter values
const todocompleted = todos.filter(function(todoc) {
    return todoc.isCompleted == true;
});

console.log(todocompleted); //returns only the todo array that is true

// get the task of the array that r completed/true

const todocomplete = todos.filter(function(todoc) {
    return todoc.isComplete == true;
    map(function(todo) {
        return todo.task;
    })
});

const sem = [
    {
       sub: 'web services',
       courseCode: 231,
       credits: 2,
       gradeRecieved: true 
    },
    {
       sub: 'sma',
       courseCode: 221,
       credits: 3,
       gradeRecieved: false
    },
    {
       sub: 'internet of things',
       courseCode: 201,
       credits: 4,
       gradeRecieved: false
    }
]

console.log(sem);

// forEach, map and filter
sem.forEach(function(semf) {
    console.log(semf);
})
// getting just the sub from each obj of the array
sem.forEach(function(semf) {
    console.log(semf.sub);
})

//map should be assigned value always so

const uni = sem.map(function(unisem) {
    return unisem.gradeRecieved;
})

console.log(uni);

const univ = sem.filter(function(uniseme) {
    return uniseme.gradeRecieved === true;
})

console.log(univ);

const unive = sem.filter(function(uniseme) {
    return uniseme.gradeRecieved == false;
    map(function(unisem){
        return unisem.sub;  
    })
});

console.log(unive);


// n JavaScript, the map() method is used to create a new array with the results of calling a provided function on 
// every element in the calling array. The map() method does not change the original array.

const ar = [1,2,3,4,5];

ar.forEach(function(arf) {
    console.log(arf)
}); // prints out the array elements

const arr = ar.map(function(no) {
    return no *2;
});

console.log(arr);

// in this eg: map method is called on the 'ar' array and the function is passed as an argument. this function is called
// for each element in the ar array. doubling each element and returning the result in 'arr' array which contains the doubled value


// In JavaScript, the filter() method is used to create a new array with all elements
// that pass the test implemented by the provided function. The filter() method does not change the original array.

const arrr = ar.filter(function(now) {
    return now % 2 === 0;
});

console.log(arrr)


// conditional variable
// == just matches the condn, === matched the data type as well
const a = '10';

if(a == 10) {
    console.log('a is 10');
} else {
    console.log('a is not 10');
}

if(a === 10) {
    console.log('a is equal to 10');
}

if(a === '10') {
    console.log('a is string with value 10')
}

b = 20;
c = 20;
if(c>b) {
    console.log('c is greater than b');
} 
else if(b == c) {
    console.log('b is equal to c');
}
else {
    console.log('b is greater than c');
}

f = 10;
g = 20;
if(f> 10 || g > 10) {
    console.log('f or g is greater than 10')
} else if (f>=10 && g >=10) {
    console.log('f and g is greater than or equal to 10')
} else {
    console.log('f and g are not equal or greater than 10')
}

// ternary op (?)

const h = 10;
const color = h > 10 ? 'red' : 'blue';
console.log(color);

// switch 

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

//functions
// num1, num2 param, numbersss fn
function number1(num1,num2) {
    console.log(num1 + num2);
};

number1(5,10); // calling fn

//Nan - not a number

//not passing arguments but setting default values
function number2(num1 = 2,num2 = 4) {
    console.log(num1 + num2);
};

number2();

function number3(num1,num2) {
    return num1 * num2;
};
// return will not log in the console so console log the arg
console.log(number3(5,10));

//turn into arrow function
// arrow fn - init function with param =>
const numberarrow = (num3,num4) => {
    console.log(num3 + num4)
};

// or

const numberarrow2 = (num3,num4) => console.log(num3 + num4);

numberarrow(10,20);
numberarrow2(20,20);

// no need of using return for arrow
// const fnname = (param1, param2) => operation like param1+param2; and then console.log(fnname());
const coursec = (c1 = 'SMA',c2 = 'IOT') => c2 + ' ' +c1;

console.log(coursec());

const fig = fig1 => fig1 *2;

console.log(fig(4));

//OOPS

// constructors should start with a capital, parameters r the properties 

function Peer(firstName, lastName, DOB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
}

// instantiate obj
const peer1 = new Peer('Hari','P','7-8-1999');
console.log(peer1);
console.log(peer1.firstName);

const peer2 = new Peer('keerthana','p','29-12-2000')
console.log(peer2);


//constructor
function Teacher(fn,ln,doj,subject) {
    this.fn = fn;
    this.ln = ln;
    this.subject = subject;
    this.doj = new Date(doj);
    this.getJoinYear = function() {
        return this.doj.getFullYear();
    }
    this.fullname = function() {
        return `${this.fn} ${this.ln}`;
    }
};

// instantizing 
const teach = new Teacher('smitha','george','2-12-1999','mathematics');
console.log(teach);

console.log(teach.getJoinYear());

console.log(teach.fullname());

// constructor3

function Stud(studName, studID, studBranch, studDOJ) {
    this.studName = studName;
    this.studID = studID;
    this.studBranch = studBranch;
    this.studDOJ = new Date(studDOJ);
    this.dateofjoining = function() {
        return this.studDOJ.getFullYear();
    }
    this.studDOE = new Date(this.studDOE);
}

Stud.prototype.dateofending = function() {
    return this.studDOE.getFullYear();
}

const stud1 = new Stud('Ram',12,'CSE','12-12-2020','12-6-2024');
console.log(stud1);
console.log(stud1.studBranch);

const stud2 = new Stud('Raj',23,'IST','12-2-2021','12-6-2025');
console.log(stud2);
console.log(stud2.dateofjoining());
console.log(stud1);

// n JavaScript, a constructor is a special method used to initialize and create an object. 
//It is called when an object is created with the new keyword. The constructor can define and 
//initialize properties and methods for the object. The name of the constructor is typically the same as the name of 
//the object, with the first letter capitalized

//People constructor

function Faculty(fname, lname, fage, fDOR) {
    this.fname = fname;
    this.lname = lname;
    this.fage = fage;
    this.fDOR = new Date(fDOR);
}

Faculty.prototype.retireYear = function() {
    return this.fDOR.getFullYear();
}

const f1 = new Faculty('Ram','raj',50,'12-6-2030');
console.log(f1);
console.log(f1.retireYear());

//class

class Faculty1 {
    constructor(fname, lname, fage, fDOR) {
        this.fname = fname;
        this.lname = lname;
        this.fage = fage;
        this.fDOR = new Date(fDOR);
    }
    getretireYear() {
        return this.fDOR.getFullYear();
    }
    getfullname() { 
        return `${this.fname} ${this.lname}`;
    }
}

const fac1 = new Faculty1('Ram','raj',50,'12-6-2030');
console.log(fac1)
console.log(fac1.getretireYear());
console.log(fac1.getfullname());

//DOM - document object module 

