$(document).ready(() => {
	let outputEl = $('#products')
	let cats = []
	let prods = []	

// 	$.ajax({
//        url: 'https://new-cool-project-7d0fa.firebaseio.com/.json',
//        type: "GET",
//        cache: false,
//        dataType: "jsonp",
//        success : function(result){console.log(result);},
//        error : function(error){console.log(error);}
// });

$.ajax('https://new-cool-project-7d0fa.firebaseio.com/.json')
.then(result => {
	console.log(result)
})

	$.ajax('products.json')
		.then(products => {
		
			$.ajax('categories.json')

			.then((categories) => {

				cats = categories.categories
				prods = products.products

				outputEl.html(writeToDom(cats, prods))
				return 10
			})
			.then((stuff) => {
				console.log(stuff)
			})
		})

		$('select').change((e) => {
			outputEl.html(writeToDom(cats, prods))
			let categorySelected = e.target.value
			if (categorySelected === "none") {
				return
			}
			let discountFound = cats.find((cat) => {
				return cat.name === categorySelected
			})
			console.log(discountFound)
			let selectedCategory = Array.from($(`.${categorySelected}`))
			let priceEl = Array.from($(`.price__${discountFound.id}`))
			
			priceEl.forEach(el => {
				let currentPrice = el.innerHTML
				currentPrice = currentPrice - (currentPrice * discountFound.discount)
				el.innerHTML = currentPrice.toFixed(2)
			})

		
		})

})

let writeToDom = (cats, prods) => {

	let htmlString = ""

	cats.forEach(cat => {

		htmlString += 
		`<div>
			<h1>${cat.name}</h1>`

		prods.forEach(prod => {

			if (cat.id == prod.category_id) {

				htmlString += `
				<section class='${cat.name}'>
					<div>${prod.name} </div>
					<div class="price__${prod.category_id}">${prod.price}</div>
				</section>`

			}
		})

		htmlString += "</div>"
	})

	return htmlString
}