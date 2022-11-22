let myEmptyArray = [];

const myStringArray = ["a", "b", "c"];

let reference = [1, 2, 3];

let myNumberArray = reference;
let myNumberArray2 = reference;

console.log(myNumberArray == myNumberArray2);

let myMixArray = ["a", 1, "b", 2, "c", 3];

console.log(myEmptyArray);
console.log(myStringArray);
console.log(myNumberArray);
console.log(myMixArray);

myStringArray.push("d");

console.log(myStringArray);

let dateForObject = new Date();

let mySimpleObject = {};

mySimpleObject.date = dateForObject;

mySimpleObject.name = "My Simple Object";

mySimpleObject.purpose = "Hold simple data";

console.log(mySimpleObject);

let mySimpleObject2 = {
    date: dateForObject,
    name: "My Simple Object",
    purpose: "Hold simple data"
}

console.log(mySimpleObject2);

console.log(mySimpleObject == mySimpleObject2);
