/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //this code works correctly as is, but I can also convert the string to a numeric value
console.log("The result is: " + result);//displays 3


let isValid = false;//previously had a string of the word false using Boolean() but was still considered truthy due to if(INPUT)
if (isValid) {
    console.log("This is valid!");//does not display
} else {//added else to display if value is intentionally false
    console.log("This is invalid")//displays This is invalid
}


let age = Number("25"); //this avoids concatenation by converting string to number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


let loginPass;
if (loginPass); //this is marked as undefined, but since there is an entry here it results in truthy
console.log("Access Granted");


let groupId = 55400;//if these remain number values, the + will erroneously add the values together 
let policyNumber = 2626801;
console.log("Member ID: " + String(groupId) + String(policyNumber));//Displays Member ID: 554002626801
