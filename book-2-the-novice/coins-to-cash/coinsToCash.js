const piggyBank = {
  pennies: 342,
  nickels: 124,
  dimes: 55,
  quarters: 72
}

let dollarAmount = 0

let calculateMoney = () => {
  dollarAmount += piggyBank.pennies * .01
  dollarAmount += piggyBank.nickels * .05
  dollarAmount += piggyBank.dimes * .1
  dollarAmount += piggyBank.quarters * .25
  console.log(dollarAmount.toFixed(2))
}

calculateMoney()



function calculateMoney() {
  dollarAmount += piggyBank.pennies * .01
  dollarAmount += piggyBank.nickels * .05
  dollarAmount += piggyBank.dimes * .1
  dollarAmount += piggyBank.quarters * .25
  console.log(dollarAmount.toFixed(2))
}