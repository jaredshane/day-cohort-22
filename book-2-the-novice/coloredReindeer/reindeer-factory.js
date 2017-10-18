const reindeerObjectFactory = function (name) {
  return Object.create(null, {
    "name": { value : name, enumerable: true }, 
    "color": { value: reindeerColorFactory.next().value, enumerable: true }
  })
}

const coloredReindeerBuilder = function () {
  const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
  const coloredReindeer = []

  // Write a for loop that looks at each reindeer
  for (let i = 0; i < reindeer.length; i++) {
    let element = reindeer[i]
    // console.log({ element })
      // Invoke factory function to create reindeer object
    let newReindeer = reindeerObjectFactory(element)
      // Put new reindeer object in coloredReindeer array
    coloredReindeer.push(newReindeer)
  
  }
  // Return coloredReindeer array
  return coloredReindeer
}
