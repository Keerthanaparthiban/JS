// Asynchronous JavaScript Tutorial #1 - what is async js


// javascript is a synchronous language - it executes statements one at a time.
// example - 
// statement 1
// statement 2 - request to database
// statement 3
// statement 4
// statement 5
// callback 

// say statement 2 as a request to make and it might take 2 to 3 seconds. At this point the statement takes time to execute and it results in a code block and rest of statements will be executed only after this particular statement is executed.
// Whereas, asynchronous js helps to start something now and finish it later. by giving a callback function to the asynchronous one to make sure it calls back after the set of statements are executed

console.log(1);
console.log(2);
console.log(3);

// // setTimeout - pass in a function and that function fires after a certain time that is specified
// // this is a async function. it doesnt block the code. The callback function will execute after 2.5s meanwhile the other statements (console log statements gets executed)
setTimeout(() => {
    console.log('callback function fired')
}, 1000); //milliseconds 

console.log(4);
console.log(5);

// Asynchronous JavaScript Tutorial #2 - HTTP Requests

// HTTP Requests - to get data from another server. these requests are made to an API Endpoint.
// browser -> sends http req -> SERVER -> sends response/data to the browser
// server side languages - ruby, PHP js

// data received from server is in json format. To make api req can use postman api, jsonplaceholder

// how to send an http request

const request = new XMLHttpRequest(); // js object to send a request

// first use the open method 
// open() - first argument is string which describes the type of request u want to make(get,post, put to update etc), second argument is where we want to make the request to or the endpoint for the req

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText) // contains the response data //fires only when the readystate is 4 and status is ok
    } else if (request.readyState === 4) {
        console.log('could not fetch data')
    }
    // console.log(request, request.readyState) // state of the current state 
    // only if the readyState is 4. We can do soemthing
});

// to get data so we r using get request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // gives a list of todos

// to send the request
request.send(); // head to browser -> network panel refresh -> req is made

// to track the request we can use a eventListener called ready state change. Attach it to the event listener
// XMLHttpRequestreadyState - returns the state of the req the client is it


// 0 - unsent - open()
// 1 - sent - open() has been Called 
// 2 - send() 
// 3 - downloading. Response text has Data 
// 4 - the op is done


// Asynchronous JavaScript Tutorial #3 - Status Codes

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

// 404 - error/bad status - readystate will be 4 but the requestText will be empty {}
// 200 - success 

// information responses are in 100 range
// 1.) 101 - continue
// 1.) 102 - switching protocol
// 1.) 103 - processing
// 1.) 104 - early hints

// success responses are in 200 range

//2.) 200 - ok
//2.) 201 - created
//2.) 200 - accepted
//2.) 200 - Non-authorative info

// Redirecting message is in 300 range  - 302 Found, 303 See Other, 304 Not Modified

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status - refer to this link

// client error requests - 400 bad request, 401 unauthorized, 403 forbidden 404 not found

// 500 - server side req - not an error on our side but the server side

// Asynchronous JavaScript Tutorial #4 - Callback Functions

// making it reusable - passing the entire http req inside a function and call it any numnber of times

const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText); // console.log(request.responseText)
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined); //console.log('Something is wrong') //no data so undefined // could not fetch for error message
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

// can be called n number of times
// getTodos();
// getTodos();
// getTodos();

console.log(1)
console.log(2)

// specifying a callback fn. function inside a calling function
// pass two arguments into the callback fn - conventions - error first, so err and data
getTodos((err, data) => {
    console.log('callback fired')
    // console.log(err, data)
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); // the callback function


console.log(3)
console.log(4)

// callback asyn function

console.log('first')
console.log('second')

const goProducts = (callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
        if(req.readyState === 4 && req.status === 200) {
            callback(undefined, req.responseText);
        } else if(req.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    req.open('GET', 'https://dummyjson.com/products/');
    req.send();
};

//callbackfn
goProducts((err,data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log('third')
console.log('fourth')

// Asynchronous JavaScript Tutorial #5 - Using JSON Data

// json is strings that look like js objects. when a browser exchanges data with a server it should be in text format so thereby JSON
// turning the response into a array of js objects 
// JSON.parse() - takes a json string and converts it into javascript objects

const reque = new XMLHttpRequest();

const recall = (callback) => {
    reque.addEventListener('readystatechange', () => {
        console.log(reque, reque.responseText)
        if(reque.readyState === 4 && reque.status === 200) {
            const data = JSON.parse(reque.responseText)
            callback(undefined, data)
        } else if(reque.readyState === 4) {
            callback('could not fetch the products', undefined)
        }
    });

    reque.open('GET', 'todos.json');
    reque.send();
};

recall((err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

