$(document).ready( () => {
	$.ajax("people.json")
		.then(res => {
			console.log(res)
			let htmlToBuild = ""
			res.students.forEach(person => {
			htmlToBuild += `<div> ${person.name} ${person.age} </div>`
		})
		$("#people").html(htmlToBuild)
	})
})



const firebase = require()