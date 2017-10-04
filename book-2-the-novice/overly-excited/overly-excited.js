// // Create an array that contains the words in the sentence
// const sentence = ["hi", "i", "am", "jared", "and", "I", "like", "to", "code", "everyday", "all", "day", "err", "day"];

// /*
//     The addExcitement function should be an impure function, and accept 
//     the array as the sole argument. It should iterate over the array 
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {
//   let sentence = ""
//   for (let i = 0; i < theWordArray.length; i++) {
//     let currentWord = theWordArray[i]
//     sentence += currentWord + " "
//     console.log(sentence)
//   }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence);



// Create an array that contains the words in the sentence
// const sentence = ["hi", "i", "am", "jared", "and", "I", "like", "to", "code", "everyday", "all", "day", "err", "day"];
// const exclamation = "!"

// /*
//     The addExcitement function should be an impure function, and accept 
//     the array as the sole argument. It should iterate over the array 
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {
//   let sentence = ""
//   for (let i = 0; i < theWordArray.length; i++) {
//     let currentWord = theWordArray[i]
//     if (i % 3 === 2) {
//       currentWord += exclamation + " "
//     } else {
//       currentWord += " "
//     }
//     sentence += currentWord + " "
//     console.log(sentence)
//   }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence);


// // Create an array that contains the words in the sentence
// const sentence = ["hi", "i", "am", "jared", "and", "I", "like", "to", "code", "everyday", "all", "day", "err", "day"];
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
//     if (i % 3 === 2) {
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
const sentence = ["hi", "i", "am", "jared", "and", "I", "like", "to", "code", "everyday", "all", "day", "err", "day"];


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
    if (i % 3 === 2) {
      currentWord += characterList + " "
      characterList += character
    } else {
      currentWord += " "
    }
    sentence += currentWord + " "
    console.log(sentence)
  }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");