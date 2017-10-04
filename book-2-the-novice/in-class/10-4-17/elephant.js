
function getMenu () {
  let elephantParts = [ 
    { "name": "ears", "price": 50 },
    { "name": "legs", "price": 90 },
    { "name": "trunk", "price": 250 },
    { "name": "tail", "price": 190 },
    { "name": "belly", "price": 150 },
    { "name": "ribs", "price": 75 }
  ]

  return elephantParts
}

function placeOrder (elephantPart, customer, quantity, cookTemperature) {
  let order = {
    "price": elephantPart.price,
    "quantity": quantity,
    "partOrdered": elephantPart.name,
    "cookTemperature": cookTemperature,
    "customer": customer
  }

  return order
}

function cookFood (order) {
  let preparedFood = {
    "part": order.partOrdered,
    "wasCookedToOrder": false,
    "quantity": order.quantity,
    "cookTime": ,
    "table": 
  }
}

let menu = getMenu()
let placedOrder = placeOrder(menu[3], "Meg Ducharme", 1, "rare")
cookFood(placedOrder)