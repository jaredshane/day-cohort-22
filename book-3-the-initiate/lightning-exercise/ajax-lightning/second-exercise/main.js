$('#clicky').click((e) => {
	console.log(e)
	$.ajax("people.json")
		.then(res => {
			console.log(res)
			let htmlToBuild = ""
			res.students.forEach(person => {
			htmlToBuild += `<div style="color: ${person.color}"> ${person.name} ${person.age} </div>`
		})
		$("#people").html(htmlToBuild)
	})
})





