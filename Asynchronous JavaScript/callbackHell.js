// nesting callbacks inside callbacks 
// when there are multiple json files 

const gotBooks = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.responseText);
        
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    })

    request.open('GET', resource);
    request.send();
}

gotBooks('booksNov/author.json',(err, data) => {
    console.log(data);
    gotBooks('booksNov/book.json', (err,data) => {
        console.log(data);
        gotBooks('booksNov/novel.json', (err,data) => {
            console.log(data);
        });
    });
});