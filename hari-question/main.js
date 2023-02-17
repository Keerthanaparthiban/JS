const arr = ["foo","bar","foo","jiko","hi","bar","bar"];

const obj = {};
arr.forEach((ele) => {
    let count = 0;
    for(i=0;i<arr.length;i++) {
        if(ele==arr[i]) {
            count++;
            obj[`${ele}`] = count;
        }    
    }
})

console.log(obj);

// for(i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }

// const arrayRes = arr.forEach(function(n) {
//     // console.log(n);
//     let count = 0;
//     for(i=0; i<arr.length; i++) {
//         if(n==arr[i]) {
//                 count++;
//         }
//     }
// });

// arr.forEach(function(n) {
//     let count = 0;
//     for(i=0;i<arr.length;i++) {
//         if(n==arr[i]) {
//             count++
//         }
//     }
//     console.log(n, count)
// })