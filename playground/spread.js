// exploring spread operator - a new EX 6 feature

function add(a, b) {
  return a + b;
}
console.log("\n\n\n");
console.log("Plain Example" + add(3, 1));

var toAdd = [9, 5];
console.log("Array no Spread: " + add(toAdd)); // no workie....
// with Spread tho...
console.log("Using Spread: " + add(...toAdd)); // it does workie

var groupA = ['Dave', 'Jim'];
var groupB = ['Tom'];
var final = [3];
console.log(final);
var final1 = [3, groupA]
console.log("no spread");
console.log(final1);
var final2 = [
  3, ...groupA
]
console.log("with spread");
console.log(final2);
console.log("\n\n\n");

// challenge
var person = ['Mike', 20];
var personTwo = ['Ike', 30];
function printNameAge(name, age) {
  console.log("Hi " + name + ", you are " + age);
}
printNameAge(...person);
printNameAge(...personTwo);

// challenge two
var names = ['Mike', 'Ben'];
var final = [
  'Dave', ...names
];
final.forEach(function (name) {
  console.log('Hi ' + name);
});
