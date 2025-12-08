// document.getElementById("count-el").innerText = 5  // pass in argument

let myage=21

console.log(myage)   //Consoles are used to verify if a variable exist and a wriiten right
// 1. Create two variables, myAge and humanDogRatio

let myAge = 21
let humanDogRatio=7 
// 2. Multiply the two together and store the result in myDogAge
let myDogAge = myAge*humanDogRatio
 
// 3. Log myDogAge to the console
console.log(myDogAge)  // Also passing an argument

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25,  and then finally increase it to 70
// Console.log the value after each step
let bonusPoints = 50
console.log(bonusPoints)

//bonusPoints= bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints=bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints=bonusPoints + 45
//console.log(bonusPoints)

// Create a function number that logs out the number 42 to the console
// Call/invoke the function
//function number(){
//    console.log(98)
//}
//number()

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36
// Create a function that logs out the sum of all the lap times

//function sumAll(){
  //  lapCompleted=lap1+lap2+lap3
    //console.log(lapCompleted)
//}
//sumAll()

// Create a function that increments the lapsCompleted variable with one
// Run it three times
//function laps(){
//    lapsCompleted=lapsCompleted+1
//}
//laps()
//laps()
//laps()

//console.log(lapsCompleted)
//___________________________________________________________________________________________________

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

 
// This is camelCase a way of defining varialbles in Js
 //let countEl= document.getElementById("count-el")
// console.log(countEl)

let count = 0
let countEl= document.getElementById("count-el")  // Creqted a variable to store my document.getElementById
let saveEl= document.getElementById("save-el")


function increment() {
     count += 1           // Increment my count
     countEl.textContent = count    // Changes the text in my count-el to my count value
 }

// DOM = Document Object Model aka How you use javascript to modify a website
// A model in JS is the representation of an HTML piece of code in js

// Creating a save function 

function save(){
	let entries = count + " - "     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
	saveEl.textContent += entries   // 3. Render the variable in the saveEl using innerText  // The textContent is another attribute(function) used to better align our text
    // console.log(count)
    countEl.textContent = 0       // resetting our value to zero after pressing save 
    count = 0                     // Equally resetting our count value to zero after pressing the save, if not js will continue from where it left 

}

//Working with strings
// Create a variable, message, that stores the string: "You have tree new notifications"
//message = "You have received three new notifications"
//console.log(message+","+ count)

// Equally concatenate by adding
// Create a variable, messageToUser, that contains the message we have logged

//let username = "per"
//let message = "You have tree new notifications"

//messageToUser= message + ", "+ username+"!"
//console.log(messageToUser)

//Strings vs Numbers 
//let name = 42
//let greeting = "Hi, my name is "
//let myGreeting = greeting + name
//console.log(myGreeting)

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
//let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
//let name = "Tanle"
//let greeting = "How are you today!"

// Render the welcome message using welcomeEl.innerText
//welcomeEl.innerText = name +", "+ greeting


// Add an emoji to the end! 👋
//welcomeEl.innerText +="👋"