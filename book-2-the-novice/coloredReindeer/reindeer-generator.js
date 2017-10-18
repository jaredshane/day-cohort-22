const getReindeerColorGenerator = function* () {
  let counter = 0
  let reindeerColor = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
      while (counter < reindeerColor.length) {
          yield currentColor = reindeerColor[counter]
          counter += 1  // Increment the counter
      }
}

const reindeerColorFactory = getReindeerColorGenerator()