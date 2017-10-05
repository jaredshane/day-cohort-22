// Create an array that contains the words in the sentence
// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// /*
//     The addExcitement function should be an impure function, and accept 
//     the array as the sole argument. It should iterate over the array 
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {
//   let sentenceToWrite = ""
//   for (let i = 0; i < theWordArray.length; i++) {
//     let currentWord = theWordArray[i]
//     sentenceToWrite += currentWord + " "
//     console.log(sentence)
//   }
// }

// for
// // Invoke the function and pass in the array
// addExcitement(sentence);



// Create an array that contains the words in the sentence
// const sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// const exclamation = "!"

// /*
//     The addExcitement function should be an impure function, and accept 
//     the array as the sole argument. It should iterate over the array 
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {
//   let sentenceToWrite = ""
//   for (let i = 0; i < theWordArray.length; i++) {
//     let currentWord = theWordArray[i]
//     let counter = i + 1
//     if (counter % 3 === 0) {
//       currentWord += exclamation + " "
//     } else {
//       currentWord += " "
//     }
//     sentenceToWrite += currentWord + " "
//     console.log(sentenceToWrite)
//   }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence);


// // Create an array that contains the words in the sentence
// const sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let exclamation = "!"

// /*
//     The addExcitement function should be an impure function, and accept 
//     the array as the sole argument. It should iterate over the array 
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {
//   let sentence = ""
//   for (let i = 0; i < theWordArray.length; i++) {
//     let currentWord = theWordArray[i]
//     let counter = i + 1
//     if (counter % 3 === 0) {
//       currentWord += exclamation + " "
//       exclamation += "!"
//     } else {
//       currentWord += " "
//     }
//     sentence += currentWord + " "
//     console.log(sentence)
//   }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence);



// Create an array that contains the words in the sentence
const sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, character) => {
  let sentence = ""
  let characterList = character
  for (let i = 0; i < theWordArray.length; i++) {
    let currentWord = theWordArray[i]
    let counter = i + 1
   if (counter % 3 === 0) {
      currentWord += characterList + " "
      characterList += character
    } else {
      currentWord += " "
    }
     sentence += currentWord + " "
     console.log(sentence)
   }
 }

// // Invoke the function and pass in the array
 addExcitement(sentence, "?");
//  addExcitement(sentence, "*")
//  addExcitement(sentence, "@")