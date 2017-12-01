$(document).ready(

	$.ajax('https://api.github.com/repos/jaredshane/TheClubhouse/commits')
		.then(res => {
			console.log(res)
			let htmlToBuild = ""

			res.forEach(commit => {
				htmlToBuild += `
					<div>
						<h1>${commit.commit.message}</h1>
						<span>${commit.commit.author.name}</span>
					</div>
				`
			})
			$("#github").html(htmlToBuild)
		})

)

