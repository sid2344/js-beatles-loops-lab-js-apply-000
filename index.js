var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}


// var facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

// function johnLennonFacts(arr) {
//   var result= []; 
//   var i = 0; 
//   while(i < arr.length) {
//     result.push(arr[i] + '!!!')
//     i++; 
//   }
//   return result; 
// }

// johnLennonFacts(facts); 

// Create a function iLoveTheBeatles which accepts a number as a parameter. The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".

// function iLoveTheBeatles(number) { 
  
//   let newArray = []; 
//   do {
//     newArray.push(`I love the Beatles!`); //this will happen one time, whether or not number meets condition below
//     number++; //increment number of times string above is pushed into newArray
//   } while (number < 15);
return newArray; } 

/*global describe, it */

 iLoveTheBeatles(8);
