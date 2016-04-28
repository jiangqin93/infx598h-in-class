alert("Hello");
/*line by line 
no compile
order matters
always put ; at the end of each sentence
*/

var n = 5;
var s = "Hello World!";
var b = true;
var u; //undefined;

/*variable name can not contain space or numbers
string: a string of characters

NULL: no value
undefined: more often used

all the data should be one of those four types
*/


n = 10;
n = n * 2;
n = n / 2;
n++; // add one 

s = "Hello";
s = s + " World";

b = false;
b = !b;

function sayHello(name) {
    console.log("Hello " + name);
}


sayHello("Jenny");

function square(n) {
    return n * n;
}

function areaCircle(radius) {
    return Math.PI*radius*radius;
}
//javascript is case sensitive: upper case is different from lower case 

function isEven(number) {
    if (number % 2 ==0)
        console.log( number + "is even");
    else
        console.log( number + "is odd");
}

function iterate() {
    console.log("starting loop");
    for (var i = 0; i < 5; i++)
    {
        console.log(i);
    }
}

iterate();


var ar = ["G", "PG", "PG-13", "R"];


console.log("array is " + ar.length + " elements long");

ar.push("NC-17");
//push sth into that array
//method: functions attached to objects/variables
console.log("array is " + ar.length + " elements long");

function dumpArray(ar) {
    for (var i = 0; i < ar.length; i++)
    {
        console.log(ar[i]);
    }
}

dumpArray(ar);

ar.forEach(function (rating, index) {
    console.log(rating, index);
});

/*functional programming: iterates
forEach can simplify functions
*/

ar.forEach(console.log.bind(console));
//"bind" refers to the current object:

//console.log(ar[0]);

// the first element in an array starts from 0
/*console object 
methods: do stuff to objects
see what's going on
test condition
*/

//keys and values


//a map
var m = {
    "red": "#F00",
    "green": "#0F0",
    "blue": "#00F"
   
};
console.log(m);
console.log(m.red);
console.log(m.yellow);
m.yellow = "#FF0";
console.log(m.yellow);

console.log(areaCircle(50));