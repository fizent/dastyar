const $ = document
const startError = $.querySelector(".start-error")
const locationKey = $.querySelector('#location')
const title = $.querySelector('title')
const hkey = $.querySelector("#key")
const hlocation = $.querySelector("#location")
const hwich = $.querySelector("#which")
const hdcode = $.querySelector("#code")
const h_head = $.querySelector("#keyCode")
const heading_div = $.querySelector("#heading")

let body_key_down = document.body.addEventListener('keydown', function (event) {
	console.log(event);
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	
})

let body_key_press = document.body.addEventListener('keypress', function (event) {
	console.log(event);
	hkey.innerHTML = event.key
	hlocation.innerHTML = event.location
	hwich.innerHTML = event.which   
	hdcode.innerHTML = event.code
	h_head.innerHTML = event.key
	
})


function time_error() {
	const div_error = document.createElement('div')
	div_error.style.backgroundColor = 'blue'
	div_error.style.color = 'white'
	div_error.innerHTML = '!یک چیزی وارد کن'
	div_error.style.padding = '20px'
	startError.appendChild(div_error)


}


setTimeout(time_error, 10000)
