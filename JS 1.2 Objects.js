// OBJECTS

// #1 STUDENT CAN ACCESS VALUES IN AN OBJECT USING DOT NOTATION
// Objects 1.1
// Use dot notation to return the firstname.
// Note: let and const do not working with these tests, you must use var.
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
  }
  return // Code here

}

// #2 STUDENT CAN ACCESS VALUES IN AN OBJECT USING BRACKET NOTATION
// Objects 1.2 
// Use bracket notation to return the location.
// Note: let and const do not working with these tests, you must use var.
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
  }
  return // Code Here

}

// #3 STUDENT CAN ADD A KEY VALUE PAIR TO AN OBJECT USING DOT NOTATION
// Objects 1.3
// Use dot notation to add a new property to the object backpack called frontpocket with the value equal to "compass".
// Note: let and const do not working with these tests, you must use var.
var backpack = {}
// Code Here


// #4 STUDENT CAN ADD A KEY VALUE PAIR TO AN OBJECT USING BRACKET NOTATION
// Objects 1.5
// Use bracket notation to add a new property named material to the box object with the value equal to "cardboard".
var box = {};
// Code Here 


// #5 STUDENT CAN CREATE A METHOD
// In the space provided, add a method on the magician object. Call the method performTrick and have it return "illusion!".
var magician = {
  props: ['dead dove', 'trick sword', 'pennies'],
  // Code here

}

// #6 STUDENT CAN INVOKE A METHOD
// Now call the performTrick method in the previous question and save the result in a variable called howdyDoodat.
// Code here


// #7 STUDENT CAN CREATE OBJECTS BY WRITING A FUNCTION THAT RETURNS AN OBJECT
// Write a function called returnFromWhenceYouCame that returns an object. The object should have a property on it called frozen which should be a boolean set to true. Then, invoke the function and save the result in a variable called dove.

// Code here








// NOT USED

// Objects 1.4
// Use dot notation to access the frontpocket property on the backpack object and assign its value to the variable backpackFrontpocket.
// Note: let and const do not working with these tests, you must use var.
var backpack = {
  frontpocket: "compass"
};
var backpackFrontpocket = // Code Here 

// Objects 1.6
// Create a variable called name. Assign it the value of the firstname property by using dot notation.
// Important: Let and const do not register with Replit's unit testing. You must use var or the tests will fail.
var person = {};
  person["firstname"] = "sally";
//code here


// Objects 2.1
// In the function personalize, change the value of name to Ryan, change the value of pwHash to 43df90w_h and change the value of username to ryanleeeallred. After you have updated all the values return the new object.
var user = {
  name: 'Sally Rally',
  pwHash: 'U+Ldlngx2BYQk',
  username: 'SallyRally801'
};
function personalize(obj) {
 // Code Here 
}


// Objects 3.1
// Inside the function updateEmail, update the email property to be the value of the parameter str. Return the updated object.
function updateEmail(obj, str) {
  // Code here
}

// Objects 3.2
// Write a function called isOldEnough that takes a person obj and checks the age property to see if the person is old enough to enter the club.  If they are 21 or older return true else return false.
// Code here

// Objects 3.3
// Create a function called addRole that takes in a user object as the first parameter and a string as the second parameter.  The string will represent the user's new role in the system (i.e. admin, creator, editor, visitor). Create a new property on the user object called "role" and assign the passed in string to it, then return the updated object.
// Code here