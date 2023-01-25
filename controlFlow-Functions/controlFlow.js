//for block
let names = ['Hari','Keerthana','Niko'];
for(let i=0; i<names.length; i++) {
    console.log(names[i]);
}

console.log(names);

// while loop
let animals = ['cat','dog','sheep','penguin'] 
let j=0;
while (j<animals.length) {
    console.log(`${animals[j]} is a animal`)
    j++;
}

console.log(`There are ${animals.length} animals`)

// do-while

let k = 5;

do {
    console.log(`${k} in loop`)
    k++;
} while(k<=10);

// if, else, else-if statement

let pass = 'Keerthana@123';
if(pass.length<=12) {
    console.log('The password is super strong')
} else if (pass.length<=8) {
    console.log('The password is not strong')
} else if (pass.length>=8 && pass.includes('@')) {
    console.log('password as @ symbol')
} else {
    console.log('password is not valid. The password should contain only alphabets in upper, lowercase and symbols')
}

console.log(!true)
console.log(!false)

// break and continue

const sc = [12,0,25,60,80,34,50,100];

for(let a = 0; a < sc.length; a++) {
    if(sc[a] === 0) {
        continue
    }
    console.log(`Your score is ${sc[a]}`)
    if(sc[a] === 100) {
        console.log(`Congratulations!! Your have the top score !!`)
        break
    }
}

// switch 

const grade = 'C'

switch(grade) {
    case 'A':
        console.log(`Your grade is ${grade}. Outstanding`)
        break;
    case 'B':
        console.log(`Your grade is ${grade}. Excellent`)
        break;
    case 'C':
        console.log(`Your grade is ${grade}. Very Good`)
        break;
    case 'D':
        console.log(`Your grade is ${grade}. Good`)
        break;
    case 'E':
        console.log(`Your grade is ${grade}. Need to improve`)
        break;
    case 'F':
        console.log(`Your grade is ${grade}. Fail`)
        break;
    default:
        console.log('Invalid grade');
        break;
}

// variable and block

let person = 20; //global variable

if(true) {
    person = 30; // changing the value of person
    console.log('Code inside the block:',person)
}

console.log('Code outside the block:',person)


// can re-define variables inside block

let age = 20; //global variable
let nam = 'HAri'
if(true) {
    let age = 30; // re-defining the global variable inside the block  //local scope, scope only inside this block
    let nam = 'Sri' // local scope
    var teach = 'EIA' // var variables are global scope variables all the time unlike let or const
    console.log(`${nam} age is ${age}. He is a ${teach} Faculty.`) 
}

console.log(`${nam} age is ${age}. He is a ${teach} Faculty.`)

// function declaration 

function greet() {
    console.log('Hello, there !');
}

// calling/invoking the function
greet(); //can be invoked n number of times
greet();
greet();

// function expression - declaring/storing a function to variables, end with a semicolon must

const speak = function() {
    console.log('Have a good day!')
};

speak();

// hoisting - function can be declared at the bottom. And js would still call the function. Works only for function declaration
// but logically first function should be declared and then called. Therefore, function expression is  better to use.
hoist();

function hoist() {
    console.log('This function call is done before declaration. And it works only on function declaration and not on function expression')
}

// passing value to functions 
// function(parameters)
const teacher = function(subject) {
    console.log(`You have ${subject} hour now!`)
};

// passing value to the function // functionName(arguments)
teacher('Mathematics');


// example 2

const stud = function(name, time) {
    console.log(`Have a good ${time}, ${name}`);
};
//passing values - pass values in same order has the parameters are declared
stud('Keerthana', 'Evening');
stud('Shaun', 'morning');

// not passing values, declaring / giving default values

const fac = function(name='Jay', hour='Evening') {
    console.log(`Have a good ${hour}, ${name}`);
};

//calling function without values coz its declared already

fac();

// return - returns the output, doesnt print it. It stores it like a memory

const calcArea = function(radius) {
    // let area = 3.14 *radius**2;
    // return area; 
    //alternative method is return directly instead of assigning to a variable
    return 3.14 * radius**2;
};

const ar = calcArea(5); // this variable has global scope
console.log(ar);

// console,log(calcArea(5)); // cannot do this coz it will through an error 
// this method allows us to reuse the values

const calcVol = function(length,breadth) {
    return 2*(length*breadth);
};

const area = calcVol(5,5);
console.log(area); // should print 50

// arrow-head function - newer and shorter function
// function keyword is replaced with arrow and is placed after the parameter. When there is only one paramter can remove the paranthesis
// when there is only one return we can take away the curly brace and return keyword too
// syntax: const varName = (paramter) => {
// .... code here
// };
// when there is only one parameter and one return
const nov = book => `You have borrowed ${book} book.`;
const novCal = nov('Ugly Love');
console.log(novCal);

// more than one parameter but only one return
const book = (bookName, Duedate, Author) =>  `You have issued ${Author}'s novel named ${bookName}. The Due date is on ${Duedate}`;


const bookcal = book('Pride and Prejudice','22-2-23','Jane Austen');
console.log(bookcal);

// more than one parameter and return can also be written as
const med = (medicineName, prescription) => {
    return `You have taken ${medicineName} meds. They are prescribed for ${prescription}`;
}

const medcal = med('Paracetamol','pain relief');
console.log(medcal);

const varName = param => param *2;

const varcal = varName(5);
console.log(varcal);

const grt = word => 'Hello, world';
const res = grt();
console.log(res);

const bill = (products,tax) => {
    let total =0;
    for(i=0;i<products.length;i++) {
        total += products[i]+ products[i]*tax;
    }
    return total;
};

// const billCal = bill([10,15,30],0.2);
// console.log(billCal);
// OR
console.log(bill([10,15,30],0.2));


//Methods - are functions but they are functions associated with objects or data types

const ninjas = 'Chun-Li';
console.log(ninjas);
// toUpperCase() is a method
let nin = ninjas.toUpperCase();
console.log(nin);

// callback function - when u pass function as an argument 
 let call = callbackval => {
    let value = 50;
    callbackval(value);
 };

 // calling a function inside callback function

 call( param => {
    console.log(param);
 });

 // callback function 

 const people = param1 => {
    let name = 'Keerthana';
    param1(name);
 };

 people( param2 => {
    console.log(param2);
 });

 const peep = ['Mario','Chun-Li','Shaun','Toad','Marco']

const logPerson = (person,index) => {
    console.log(`${index} - Hello ${person}`)
};

peep.forEach(logPerson);


 // callback function 0 normal function with another function passed as an parameter or argument to it


 const ul = document.querySelector('.student');

 const student = ['Hari', 'Keerthana', 'Raj', 'Yamini', 'Madhu'];

 let html = ``;

 student.forEach( person => {
    html += `<li style="color: purple">${person}<li>`;
 });

 console.log(html);

 ul.innerHTML = html;
 

 // objects - they have properties and things they can do (methods)
 // phone - properties - color, model . method - ring, call etc

 // object literal notations 

 let user = {
    name: 'Keerthana',
    age: 22,
    email: 'keerthanap2435@gmail.com',
    location: 'bangalore',
    blogs: ['Why mac & cheese rule', '10 things to do with marmite'],
    login: function () {
        console.log('User has logged in!')
    },
    logout: function() {
        console.log('User has logged out!')
    },
    //can also be written as
    // logBlogs() {
    //     console.log('this user has written the following blogs:');
    //     this.blogs.forEach( blog => {
    //         console.log(blog);
    //     });
    // }
    logBlogs: function() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach( blog => {
            console.log(blog);
        });
    }
 };

 console.log(user);
 console.log(user.name);
 console.log(user.email);
 console.log(user.age);

//replacing
user.age = 20;
console.log(user.age);
//another way
console.log(user['name']);
console.log(user['blogs']);
user['name'] = 'chun-li';
console.log(user['name']);

// dot notation and [] notation

console.log(typeof user);

user.login();
user.logout();

const naam = 'maria';

console.log(naam.toUpperCase());
user.logBlogs();

// Array can have objects too

const movies = [
    {title: 'Interstellar', releaseYear: '2019'},
    {title: 'Pride and Prejudice', releaseYear: '2016'},
    {title: 'Avatar 2', releaseYear: '2022'},
    {title: 'Call me by your name', releaseYear: '2010'}
];

console.log(movies);

const cinema = {
    theatre: 'PVR Cinemas',
    NoOfseats: 250,
    movies: [
        {title: 'Interstellar', releaseYear: '2019'},
        {title: 'Pride and Prejudice', releaseYear: '2016'},
        {title: 'Avatar 2', releaseYear: '2022'},
        {title: 'Call me by your name', releaseYear: '2010'}
    ],
    movie() {
        this.movies.forEach(mov => {
            console.log(mov.title, mov.releaseYear)
        });
    }
}

console.log(cinema.theatre);
cinema.movie();

// Built-in objects

//Math objects

console.log(Math);
console.log(Math.PI)
console.log(Math.pow)

const roundof = 4.2;

console.log(Math.round(roundof));
console.log(Math.floor(roundof));
console.log(Math.ceil(roundof));
console.log(Math.trunc(roundof));

const rand = Math.random();
console.log(Math.round(rand * 100));

// primitive values 

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score one: ${scoreOne} and Score two: ${scoreTwo}`);

scoreOne = 100;
console.log(`Score one: ${scoreOne} and Score two: ${scoreTwo}`);
// Does not affect the scoreTwo value

// Reference types

const userOne = {name:'Rye',age:34}
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
//changes the value in both. Coz it is stored in heap. Stored once in two diff pointers


