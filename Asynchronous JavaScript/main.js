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
}, 2500); //milliseconds 

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
        console.log(request.responseText) // contains the response data //fires only when the readystate is 4 and status is ok
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