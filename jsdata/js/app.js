"use strict";
//strict mode: doesn't allow you to do stupid things
// console.log(leRecords.length);
//load the table body 

var tbody = document.querySelector("tbody");
var thCountry = document.querySelector("#country-header");
var thLE = document.querySelector("#le-header");

function createTableCell(value) {
    var td = document.createElement("TD");
    td.textContent = value;
    //innerHTML: random value from datafile: get execute by the browser
    //safe property to use
    return td;    
}

function addRow(record) {
    /*
        this creates:
        <tr>
            <td> country name</td>
            <td> life expect 2013</td>
        </tr>
    */ 
    var tr = document.createElement("TR");
    tr.appendChild(createTableCell(record.country));
    tr.appendChild(createTableCell(record.le_2013));
    tbody.appendChild(tr);
}

function populateTable() {
    tbody.innerHTML = "";
    //get rid of any content inside of tbody, clean it
    leRecords.forEach(addRow);
}

function compareByLE(r1, r2) {
    return  -(r1.le_2013 - r2.le_2013);    
}

function compareByCountry(r1,r2) {
    return r1.country.localeCompare(r2.country);
    //return -1 when smaller
}

leRecords.sort(compareByLE);
populateTable();

thCountry.addEventListener("click", function() {
   leRecords.sort(compareByCountry);
   populateTable(); 
});

thLE.addEventListener("click", function() {
   leRecords.sort(compareByLE);
   populateTable(); 
});


///////////related to calculate, not to put on the screen

//to build up a distinct table
//what is set? unique values
//hashtable: keys have to be distinct.

var distinctIGs = {};

leRecords.forEach(function(record) {
//    console.log(record.income_group);
    var stats = distinctIGs[record.income_group];//have this keys, otherwise: undefined
    if (undefined == stats) {
        stats = {sum: 0, count: 0}; //properties
        distinctIGs[record.income_group] = stats;
    }
    stats.sum += record.le_2013; //stats[sum] is correct too
    stats.count++; //累加hashtable
});





//get all keys in the object as an array and print it
var keys = Object.keys(distinctIGs); //Object is a global variable, upper-case O: refers to the general data type
keys.forEach(function(key) {
   var stats = distinctIGs[key];
   var avg = stats.sum / stats.count;
   console.log("%s = %d", key, avg);
});



//whenever someone click the table header, trigger click function 

// //SORT THE ARRAY
// leRecords.sort(function(r1, r2)   {
//     return -(r1.le_2013 - r2.le_2013);
// });

// //looping
// leRecords.forEach(addRow);
// //pass each record to addRow


var person = {
    name: "Dave",
    sayHello: function() {console.log("Hello "+ this.name);}
};

person.sayHello();
person.sayHello.bind({name: "Mary"})();//change the value of properties
function invoke (fn) {
    fn();
}

invoke (person.sayHello.bind(person));

leRecords.forEach(console.log.bind(console)); //

var student = Object.create(person);
student.program = "MSIM";
console.log(student.program);
