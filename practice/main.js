// // two types of selectors - single and multiple
// // browser has the window obj - which is the parent obj
// console.log(window); // has certain properties methods etc

// // single selectors
// const form = document.getElementById('my-form');
// console.log(form);

// // query selector - select the first element that matches a specified CSS selector(s) in the document. 
// // It is a method of the Document and elements obj
// //It returns the first element that matches the specified selector, or null if there is no such element.
// const sel = document.querySelector('#my-form');
// console.log(sel);

// console.log(document.querySelector('h1')); // single selector so logs only the first h1 tag

// // mutlipe selectors
// console.log(document.querySelectorAll('.item')); // gives a nodelist which is similar to array

// //old 
// console.log(document.getElementsByClassName('item')) // a html collection - cant run array methods, should manually run them

// const items = document.querySelectorAll('.item');

// items.forEach((it) => console.log(it));

const ul = document.querySelector('.items');

// console.log(ul);
// ul.remove();

// ul.lastElementChild.remove(); // removes the last child

ul.firstElementChild.textContent = 'Changed the text from item1 to this'; // change the text content of that ul elements first child

// selecting elements child using index

ul.children[1].innerText = 'Index';

// documents, single multiple selector, querySelector, remove, text content, select childs - lastchild, firstchild , children[indexno]

// add inner html
ul.lastElementChild.innerHTML = '<h1>Hello<h1>'; //change html dynmaically
ul.firstElementChild.innerHTML = '<h3>Hi<h3>';
ul.children[1].innerHTML = '<h2>Hola</h2>'
ul.children[1].style.color = 'red';
ul.children[2].style.backgroundColor = 'red';

// const btn = document.querySelector('.btn');

// btn.style.backgroundColor = 'red';

// button click - EVENT LISTENER

const btn = document.querySelector('.btn');
//e - param
// click - onclick, mouseover - mousehover , mouseout - hover and exit , refer to other events

// preventdefault - prevents the click from flashing
// btn.addEventListener('click' ,(e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target); //target btn
//     console.log(e.target.className); //get the target element className
//     document.querySelector('#my-form').style.backgroundColor = '#ccc'; //when clicked it changes the bg of form
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h4>Hello<h4>';
// });


const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// submit event
myform.addEventListener('submit', onsubmit);

function onsubmit(f) {
    f.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter the fields';
        //alert('Please enter the fields');
        //to disappear after three seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('success');
        //create elements - add to that li - item list
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

// if else block for the fields