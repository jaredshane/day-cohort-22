$(document).ready(() => {
	let outputEl = $('#products')
	let cats = []
	let prods = []

	$.ajax('products.json')
		.then(products => {
		
			$.ajax('categories.json')

			.then((categories) => {

				cats = categories.categories
				prods = products.products

				outputEl.html(writeToDom(cats, prods))
			})
		})

		$('select').change((e) => {
			outputEl.html(writeToDom(cats, prods))
			let seasonSelected = e.target.value
			if (seasonSelected === "none") {
				return
			}
			let discountFound = cats.find((cat) => {
				return cat.name === seasonSelected
			})
			let selectedCategory = Array.from($(`.${seasonSelected}`))
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