//Assignment 1 a
let a = ["Hassan","Boline","Frederik", "Bob"]

let aa = a.filter(a => a.charAt(0) == "B");

console.log(aa)

//Assignment 1 b
let aaa = aa.map(aa => aa).reverse();

console.log(aaa)

//Assignment 3 a
var numbers = [1, 3, 5, 10, 11];

var res = numbers.map(function (value, index) {
    var next = numbers[index+1]
    value + next
})
//returnere undefined, men er uklart hvorfor
//console.log(res);

//Assignment 3 b
var nav = ["Hassan", "Peter", "Jan", "Boline"]
var listItems = nav.map(nav => {
    return `<a href=”www.site.com/profile/${nav}”>${nav}</a>`
  }).join("\n")
//console.log(`<nav>\n${listItems}\n</nav>`)

//Assignment 3 c
var persons = [
    {name:"Hassan",phone:"1234567"}, 
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Boline", phone: "79345"}
];
var A3C_name = persons.map(persons => {
    return `<td>${persons.name}</td>\n`
}).join("")
var A3C_phone = persons.map(persons => {
    return `<td>${persons.phone}</td>\n`
}).join("")
console.log(`<table>\n<tr>\n${A3C_name}</tr>\n<tr>\n${A3C_phone}</tr>\n<table>`)

//Assignment 4 a
var all= ["Hassan", "Peter", "Carla", "Boline"].join("#");
console.log(all)

//Assignment 4 b
var A4B = [2, 3, 67, 33];
const sum = (preValue, currentValue) => preValue + currentValue;

console.log(A4B.reduce(sum));

//Assignment 4 c
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];
var res4c = 0;
var sum2 = members.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.age
}, res4c)

console.log(sum2/4)