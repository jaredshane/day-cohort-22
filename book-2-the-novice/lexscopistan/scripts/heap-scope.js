const gemHeapSkope = function () { // No parameter needed
// Resource contained inside


/*
The gem mine does not exist outside the barricade of the
hëap-skopes. The Lexscopistanians build the barricade
around their facility AND the resource.

a.k.a.
Instead of being located in an outer scope to the
function, the gem mine is enclosed by the scope of
the `gemHeapSkope` function.
*/
	const GemMine = {
		'Onyx': {
			'kilograms': 453
		},
		'Amethyst': {
			'kilograms': 453
		},
		'Bloodstone': {
			'kilograms': 453
		},
		'Emerald': {
			'kilograms': 453
		}
	}
		
	/*
  Instead of processing the entirety of the resources in
  bulk - which is what the stâck-skope does - this skope
  will return an object that has a method for processing
  each type of mineral.

  We're exposing the functionality of this skope to code
  in the outer scope, so that the order in which minerals
  are processed can be customized.

  Hëap-skopes workshops can process 5 kilograms of a
  mineral with each work order. So every time the `process`
  function is invoked, subtract 5 from the amount of the
  requested mineral from the enclosed GemMine above.
  */
  
	return {
		'process': function (requestedMineral) {
			/*
			Subtract 5 from the total kilograms available in
			the gem mine, but make sure you stop when there
			are no minerals left.
			*/
			let counter = 0
			let selectedGemKilograms = GemMine[requestedMineral].kilograms
			// console.log(GemMine)
					
			if(selectedGemKilograms >= 5 ){
				/*
				You can reference the `GemMine` variable here
				because it lives in an outer scope:
				e.g. GemMine[requestedMineral].kilograms
				*/
				GemMine[requestedMineral].kilograms = selectedGemKilograms - 5
				counter += 5
			} else if (selectedGemKilograms >= 3 && selectedGemKilograms != 0) {
				GemMine[requestedMineral].kilograms = selectedGemKilograms - 3
				counter += 3
			} else {
				requestedMineral = null
			}

			return {
				'mineral': requestedMineral,
				'amount': counter // Change this to the correct amount
			}
		}
	}
}

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope()

/*
Process the gems in any order you like until there none
left in the gem mine.
*/
let continueOn = true
let gems = ['Onyx', 'Amethyst', 'Bloodstone', 'Emerald']
let gemObj = { 'mineral': '', 'amount': '' }
let myArray = []
     
while (continueOn) {
	gems.forEach(gem => {
		gemObj = SkopeManager.process(gem)
		myArray.push(gemObj)
		if (gemObj.amount == 3) {
			continueOn = false
		}
	//  console.log(gemObj)
	})    
}
// console.log(myArray)

/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/

// const containerGenerator = function* () {
// 	let counter = 1
// 	let containerMax = 30 
// 	while (counter < containerMax) {
// 		yield counter
// 		counter++  // Increment the counter
// 	}
// }
// const containerFactory = containerGenerator()


//Place the gems in the storage containers, making sure that once a container has 565 kilograms of gems, you move to the next one.
// myArray.forEach(gem => console.log(gem))

// console.log('hello')




