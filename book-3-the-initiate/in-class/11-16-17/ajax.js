$(document).ready(() => {
	console.log('sup')

	const outputEl = $('#songs')

	$.ajax("songs.json")
		.then((data) => {
			let personHtml = ""
				data.forEach(person => {
					personHtml += `
						<div class='people'>
							<h1> ${person.id} </h1>		
							<h2> ${person.first_name} ${person.last_name}</h2>
						</div>`
				})
			outputEl.html(personHtml)
		});

})