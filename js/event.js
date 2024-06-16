let $ = document
let startError = $.querySelector(".start-error")
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let hkey = $.querySelector("#key")
let hlocation = $.querySelector("#location")
let hwich = $.querySelector("#which")
let hdcode = $.querySelector("#code")
let h_head = $.querySelector("#keyCode")
let heading_div = $.querySelector("#heading")

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
	let div_error = document.createElement('div')
	div_error.style.backgroundColor = 'blue'
	div_error.style.color = 'white'
	div_error.innerHTML = '!یک چیزی وارد کن'
	div_error.style.padding = '20px'
	startError.appendChild(div_error)


}


setTimeout(time_error, 10000)
