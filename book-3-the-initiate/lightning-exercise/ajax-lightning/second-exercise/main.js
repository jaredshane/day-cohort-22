$('#clicky').click((e) => {
	$.ajax("people.json")
		.then(res => {
			let htmlToBuild = ""
			res.students.forEach(person => {
			htmlToBuild += `<div style="color: ${person.color}"> ${person.name} ${person.age} </div>`
		})
		$("#people").html(htmlToBuild)
	})
})





