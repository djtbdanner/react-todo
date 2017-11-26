var moment = require('moment');
console.log(moment().format());
// January 1st 1970 @ 12 AM -> 0
var now = moment();
console.log ("current timestamp " + now.unix());
var timestamp = 1511711846;
//var timestamp = 1401711846;
var theMoment = moment.unix(timestamp);
console.log(" earlier moment from " + timestamp +  " is " + theMoment.format());
console.log(" formatted " + timestamp +  " is " + theMoment.format("MMM"));
console.log(" formatted " + timestamp +  " is " + theMoment.format("MMM D, YYYY"));
console.log(" formatted " + timestamp +  " is " + theMoment.format("MMMM D, YYYY @ h:mm a"));
console.log(" formatted " + timestamp +  " is " + theMoment.format("MMMM Do, YYYY @ h:mm A"));
