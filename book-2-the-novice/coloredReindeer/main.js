let domReindeer = document.getElementById('reindeer')

let reindeerArray = coloredReindeerBuilder()

for (let i = 0; i < reindeerArray.length; i++) {
  let element = reindeerArray[i];
  console.log(element)
  domReindeer.innerHTML += `
  <section style="color: ${element.color}">${element.name}</section>
  `
}