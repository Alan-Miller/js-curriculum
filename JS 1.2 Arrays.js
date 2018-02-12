// ARRAYS

// #1 STUDENT CAN ACCESS VALUES IN ARRAY USING INDEX
// Arrays 1.1
// Return the first element in the array that is being passed in.
function first( arr ) {
  var firstItem = // code here
  return firstItem;
}



// #2 STUDENT CAN ACCESS THE LAST VALUE IN AN ARRAY WITHOUT KNOWING ITS INDEX.
// Arrays 1.3
// Return the last element of the array that is being passed in.
function last( arr ) {
  var lastItem = // code here
  return lastItem;
}



// #3 STUDENT CAN USE .PUSH() TO ADD A VALUE TO THE END OF AN ARRAY
// Arrays 1.4
// Add a number to the end of the array that is being passed in.
function addItem( array, number ) {
  // code here
  
  return array;
}



// #4 STUDENT CAN USE .POP() TO REMOVE A VALUE FROM THE END OF AN ARRAY
// Arrays 1.5
// Remove the last element from the array that is being passed in.
function removeLast( array ) {
  // code here
  return array;
}



// #5 STUDENT CAN USE .SHIFT() TO REMOVE A VALUE FROM THE BEGINNING OF AN ARRAY
// Arrays 1.6
// Remove the first element from the array that is being passed in.
function removeFirst( array ) {
  // code here
  
  return array;
}



// #6 STUDENT CAN USE .UNSHIFT() TO ADD A VALUE TO THE BEGINNING OF AN ARRAY
// Add the passed-in element to the beginning of the array that is being passed in.
function addToFront( array, element ) {
  // code here
  
  return array;
}


// #7 STUDENT CAN USE .SLICE() TO MAKE A COPY OF ALL (OR A PORTION) OF AN ARRAY
// Create a new variable called fourMoreYears and add a copy of the fourYears array to it using .slice().
// Then, use .push() to add the number 12 to the back of the array 4 more times, making the second array equal [9, 10, 11, 12, 12, 12, 12, 12]
var fourYears = [9, 10, 11, 12]
// Code here



// #8 STUDENT CAN USE .SPLICE() TO REMOVE PORTIONS OF AN ARRAY AND OPTIONALLY ADD IN NEW VALUES.
// Here is an array of names. Use .splice() to replace 'Tony' with 'smoke', storing 'Tony' in a variable called dumbWaiter.
var magicians = ['Joe', 'Byron', 'Tony']
// Code here


// #9 STUDENT CAN USE .LENGTH TO CHECK THE LENGTH OF AN ARRAY
// Arrays 1.2
// Return the length of the array that is being passed in.
function length( arr ) {
  var lengthCount = // code here
  return lengthCount;
}


// #10 STUDENT CAN USE A FOR LOOP TO REPEAT A BLOCK OF CODE UNTIL THE CONDITION FAILS
// Add a for loop to push numbers into the numbers array, starting with 1 and ending with n. For example, if n is 10, the numbers array should equal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function addNumbers(n) {
  var numbers = [];
  // Code here
  
  return numbers;
}


// #11 STUDENT CAN USE A FOR LOOP TO ITERATE OVER AN ARRAY
// You will be given an array of user objects. Each user has their own impression of a chicken, and they are all pretty bad. Given an array of user objects, loop through the users and change the chickenImpression property to have a value of "Bok bok bok".
// Here is an example of what the user object array might look like:
// var users = [
//   {
//     name: 'Joe',
//     chickenImpression: 'Koka-koka-ko!'
//   },
//   {
//     name: 'Lucy',
//     chickenImpression: 'A-koodle-doodle-doo'
//   }
// ]
// soundLikeAnActualChicken( users ); -> [{ name: 'Joe', chickenImpression: 'Bok bok bok' }, { name: 'Lucy', chickenImpression: 'Bok bok bok' }]
function soundLikeAnActualChicken( array ) {
  // Code here
    
  return array;
}







// NOT USED


// Arrays 2.1
// Modify the given for loop to push i into the numbers array. If done correctly numbers should equal:
// var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function maker() {
  var numbers = [];
  for( var i = 0; i <= 25; i++ ) {
    // code here
  }
  
  return numbers;
}

// Arrays 2.2
// Fill the numbers array with numbers 0-31.
function count31() {
  var numbers = [];
  
  // code here
  
  return numbers;
}

// Arrays 2.3
// Using the given for loop, fill the newArray with the passed in array's elements in reverse order.
// For example:
// backWards( [0,1,2,3] ); -> [3,2,1,0]
// backWards( [ true, false ] ); -> [ false, true ]
// backWards( [ 'first', 'last' ] ); -> [ 'last', 'first' ]
function backWards( arr ) {
  var newArray = [];
  
  for( var i = arr.length - 1; i >= 0; i-- ) {
    // code here
  }
  
  return newArray;
}

// Arrays 2.4
// Search the passed in array with the passed in value. If the array contains the value, return true. Otherwise return false.
// For example:
// findInArray([0,1,2,3], 3); -> true
// findInArray([0,1,2,3], 4); -> false
function findInArray( arr, value ) {
  // code here
}

// Arrays 2.5
// Modify the given for loop to add ten to each element in the passed in array and then push the sum into the newArr array. You can assume that all items in the array will be numbers.
// For example:
// addTen([10,20,30]); -> [20,30,40]
// addTen([1,2,3,4]); -> [11,12,13,14]
function addTen( arr ) {
  var newArr = [];
  
  for( var i = 0; i < arr.length; i++ ) {
    // code here
  }
  
  return newArr;
}

// Arrays 2.6
// Modify the given for loop to add ten to each element in the passed in array and then push the sum into the newArr array. This array will contain a combination of strings and numbers. You will have to figure out a way to end up with an array of numbers only.
// For example:
// addTen([10,'20',30]); -> [20,30,40]
// addTen([1,'2',3,'4']); -> [11,12,13,14]
function addTen( arr ) {
  var newArr = [];
  
  for( var i = 0; i < arr.length; i++ ) {
    // code here
  }
  
  return newArr;
}

// Arrays 3.1
// Given an array full of user objects, complete the function to delete a user object from the array.
// For example:
// var user0 = {
//   name: 'James'
// }
// var user1 = {
//   name: 'Missy'
// }
// deleteUser( [ user0, user1 ], 'name', 'James' ); -> [{ name: 'Missy'}]
function deleteUser( array, property, value ) {
  for( var i = 0; i < array.length; i++ ) {
    if( array[i][property] === value ) {
      // code here
    } 
  }
  
  return array;
}

// Arrays 3.2
// Given an array of user objects, update the user's email property if the condition is met.
// For example:
// var user0 = {
//   name: 'James',
//   email: null,
//   flag: true
// }
// updateUserEmail([ user0 ], 'flag', true, 'email@domain.com'); -> [{ name: 'James', email: 'email@domain.com', flag: true }]
function updateUserEmail( array, property, value, newEmail ) {
  for( var i = 0; i < array.length; i++ ) {
    if ( array[i][property] === value ) {
      // code here
    }
  }
  
  return array;
}

// Arrays 3.3
// Given an array of user objects, loop through the users and check to see they have a given property that equals a given value. If that user object does, then update its password to the value of newPassword.
// For example
// var user0 = {
//   name: 'James',
//   password: 'secret',
//   flag: true
// }
// changePassword( [ user0 ], 'flag', true, 'password' ); -> [{ name: 'James', password: 'password', flag: true }]
function changePassword( array, property, value, newPassword ) {
  for( var i = 0; i < array.length; i++ ) {
    // code here
  }
  
  return array;
}

// Arrays 3.4
// Create a function called updateUserInfo that has five parameters (array, propertyKey, propertyValue, newEmail, newName ). You can assume that array will always be an array of objects. Loop through array and if any objects have a property name of propertyKey that has the value of propertyValue, update that object's email and name properties to the values of newEmail and newName. Then return array.
// For example
// var user0 = {
//   name: 'James'
//   email: null,
//   flag: true
// }
// updateUserInfo( [ user0 ], 'name', 'James', 'email@domain.com', 'Bob' );
// returns [{ name: 'Bob', email: 'email@domain.com', flag: true }]

// Code here