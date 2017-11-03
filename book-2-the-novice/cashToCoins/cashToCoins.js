//Total dollars
let dollarAmount = 45.29 * 100
// console.log({ dollarAmount })

//What's in the piggyBank
let piggyBank = {
  "quarters": 0,
  "dimes": 0,
  "nickels": 0,
  "pennies": 0
}
// Running total through coin counter

while (dollarAmount != 0){
    if (dollarAmount >= 25) {
        dollarAmount -= 25
        piggyBank.quarters += 1
    }
    else if (dollarAmount >= 10) {
        dollarAmount -= 10
        piggyBank.dimes += 1
    }
    else if (dollarAmount >= 5) {
        dollarAmount -= 5
        piggyBank.nickels += 1
    }
    else if (dollarAmount >= 1) {
        dollarAmount -= 1
        piggyBank.pennies += 1
        console.log(dollarAmount)
    }
}

console.log(piggyBank)

// function coinCounter(amount) {
//   // Initialize a JavaScript object to hold the coins
//   amount = amount * 100;
//   var coinPurse = {};

//   coinPurse.quarters = 0;
//   coinPurse.dimes = 0;
//   coinPurse.nickels = 0;
//   coinPurse.pennies = 0;


//   while(amount > 0){
//         if (amount>=25){
//             amount = amount-25;
//             coinPurse.quarters++;
//         }
//         else if (amount>=10){
//             amount = amount-10;
//             coinPurse.dimes++;
//         }
//         else if (amount>=5){
//             amount = amount -5;
//             coinPurse.nickels++;
//         }
//         else if (amount>=1){
//             amount = amount - 1;
//             coinPurse.pennies++;
//         }
//     }
//     console.log(coinPurse);
// }

//  var coins = coinCounter(4.33)
//  console.log(coins);



