const para = document.querySelector('p'); // grabs the first p tag it comes across - top to bottom

console.log(para);

const pa = document.querySelector('.error');
console.log(pa);

const diverror = document.querySelector('div.error'); // there are two errrors. to be specific to get the div error

console.log(diverror)

// to grab multiple elements

const paras = document.querySelectorAll('p'); // grabs all p tags
console.log(paras);

// to get the nodelist elements
console.log(paras[2]);

// using forEach on nodelist

paras.forEach( param => {
    console.log(param);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

errors.forEach( err => {
    console.log(err);
});

// Get elements by ID
const id = document.getElementById('page-title');
console.log(id);

// Get elements by their class name
const classN = document.getElementsByClassName('error');
console.log(classN); // html collection will be printed, we cannot use forEach on html collection like we used on nodeList

// Get elements by their tagName

const tagName = document.getElementsByTagName('p'); 
console.log(tagName);

console.log(tagName[1]); // access tagNames htmk collection using indexing

// accessing the text

const p = document.querySelector('p');

console.log(p.innerText);
p.innerText = 'Ninjas are awesome!';
console.log(p.innerText);

// grabbing all p tags

const allP = document.querySelectorAll('p');

allP.forEach( para => {
    console.log(para.innerText);
    para.innerText += ' New text';
});

// change html 
const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML += `<h1>This is a new h1</h1>`


const pp = ['Mario','Chun-Li','Shaun','Nina']

pp.forEach( person => {
    content.innerHTML += `<li>${person}</li>`
});

// links
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'www.yahoo.com');
link.setAttribute('style', 'color: purple'); // doesnt exist. Js create it !!
link.innerText = 'Yahoo website link:';

console.log(link);

const titlee = document.querySelector('#page-title');

titlee.setAttribute('style','color: crimson');

// can also varName.style.attributeName
console.log(titlee.style);
titlee.style.margin = '50px';
titlee.style.fontSize = '60px';

const errDiv = document.querySelector('.err');

console.log(errDiv.classList);
errDiv.classList.add('errorr');
errDiv.classList.remove('errorr');
errDiv.classList.add('success');

const paragraph = document.querySelectorAll('h4') 

paragraph.forEach( p => {
    if(p.textContent.includes('error')) {
        p.classList.add('errorr');
    } else if(p.textContent.includes('success')) {
        p.classList.add('success')
    } else {
        p.classList.add('none')
    }
});


// toggle 

const tog = document.querySelector('.togglediv');
console.log(tog.innerText);
tog.classList.toggle('test'); // adds a test class. 

tog.classList.toggle('test'); // will remove that toggle class
tog.classList.toggle('test'); // adding it back