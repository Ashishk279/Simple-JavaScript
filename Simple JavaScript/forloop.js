// const prompt=require("prompt-sync")({sigint:true});
// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++){
//     sum += i + 1;
// }
// console.log("Sum of first " + n + " natural numbers" + sum);


let obj = {
    harry : 33,
    ashish : 31,
    shubu : 34,
    ritika : 21
}

for( let a in obj){
    console.log("Marks of " + a + " are " +obj[a]);
}

for (let a of "Ashish"){
    console.log(a);
}