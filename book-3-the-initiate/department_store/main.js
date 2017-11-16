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

				let whatever = writeToDom(cats, prods)
				outputEl.html(whatever)
			})
		})

		$('select').change((e) => {
			let seasonSelected = e.target.value
			console.log(seasonSelected)
			console.log(cats)
			console.log(prods)
		})

})

let writeToDom = (cats, prods) => {
	let htmlString = ""
	cats.forEach(cat => {
		htmlString += `
		<div>
			<h1>${cat.name}</h1>
		`
		prods.forEach(prod => {
			if (cat.id == prod.category_id) {
				htmlString += `
					<section class='${prod.category_id}'>
					<div> Name: ${prod.name} </div>
					<div class="${prod.category_id}__price">Price: ${prod.price}</div>
					<section>
				`
			}
		})
		htmlString += "</div>"
	})
	return htmlString
}