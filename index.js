const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1

class Player {
	constructor(){
		this.position = {
			x: 100,
			y: 100
		}
		this.velocity = {
			x:0,
			y:0
		}
		this.width = 30
		this.height = 30
	}

	draw() {
		c.fillStyle = 'MAGENTA';
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

	update(){
		this.draw()

		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
		576
		if (this.position.y + this.height + this.velocity.y <= canvas.height)
		this.velocity.y += gravity
		//else this.velocity.y = 0
	}
}

class Platform {
	constructor({x,y, image}) {
		this.position = {
			x: x, // sadece x, \n y ile aynı
			y: y
		}
		this.image = image
		this.width = image.width
		this.height = image.height
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y)
	}
}

class Biblo{
	constructor({x,y, image}) {
		this.position = {
			x: x, // sadece x, \n y ile aynı
			y: y
		}
		this.image = image
		this.width = image.width
		this.height = image.height
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y)
	}

}

class Kedi{
	constructor({x,y, image}) {
		this.position = {
			x: x, // sadece x, \n y ile aynı
			y: y
		}
		this.image = image
		this.width = image.width
		this.height = image.height
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y)
	}

}


let player = new Player()

function createImage(imageSrc){
	const image = new Image();
	image.src = imageSrc;
	return image;
}

let PlatformMiddle = createImage('https://phocopol.sirv.com/ara-zemin.png');

let PlatformRight = createImage('https://phocopol.sirv.com/sag-uc-zemin.png');

let PlatformLeft = createImage('https://phocopol.sirv.com/sol-uc-zemin.png');

let PlatformFloating =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(11).png');

let Flag = createImage('https://phocopol.sirv.com/flag.png');

let Mountains = createImage('https://phocopol.sirv.com/agac2.png');

let Background = createImage('https://phocopol.sirv.com/g%C3%B6ky%C3%BCz%C3%BCbulut.png');

let YouWinCat =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(17).png');

let YouLoseCat =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(20).png');

let platforms = [
	new Platform({x:0, y:470, image: PlatformMiddle}), 
	new Platform({x:PlatformMiddle.width, y:470, image: PlatformMiddle}), 
	new Platform({x: -12, y: 470, image: PlatformRight}),
	new Platform({x: 2*PlatformMiddle.width, y: 470, image: PlatformLeft}),
	
	new Platform({x: 200, y: 300, image: PlatformFloating}),
	new Platform({x: 500, y: 150, image: PlatformFloating}),

	new Platform({x:1350, y:470, image: PlatformMiddle}), 
	new Platform({x: 1350-12, y: 470, image: PlatformRight}),
	new Platform({x: 1350+PlatformMiddle.width, y: 470, image: PlatformLeft}),
]

let biblos = [
	new Biblo({x:0, y:0, image: Background}),
	new Biblo({x:0, y:0, image:Mountains}),
	new Biblo({x:1500, y:350, image:Flag}),
]

let kedis = [
	new Kedi({x:450, y:100, image: YouWinCat}),
	new Kedi({x:450, y:100, image: YouLoseCat})
]


let keys = {
	right: {
		pressed: false
	},
	left: {
		pressed: false
	},
	"space": {
		pressed: false
	}
}

let scrollOffSet = 0

function init(){
	player = new Player()

	PlatformMiddle = createImage('https://phocopol.sirv.com/ara-zemin.png');

	PlatformRight = createImage('https://phocopol.sirv.com/sag-uc-zemin.png');

	PlatformLeft = createImage('https://phocopol.sirv.com/sol-uc-zemin.png');

	PlatformFloating =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(11).png');

	Flag = createImage('https://phocopol.sirv.com/flag.png');

	Mountains = createImage('https://phocopol.sirv.com/agac2.png');

	Background = createImage('https://phocopol.sirv.com/g%C3%B6ky%C3%BCz%C3%BCbulut.png');

	YouWinCat =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(17).png');

	YouLoseCat =  createImage('https://phocopol.sirv.com/pixil-frame-0%20(20).png');
	platforms = [
		new Platform({x:0, y:470, image: PlatformMiddle}), 
		new Platform({x:PlatformMiddle.width, y:470, image: PlatformMiddle}), 
		new Platform({x: -12, y: 470, image: PlatformRight}),
		new Platform({x: 2*PlatformMiddle.width, y: 470, image: PlatformLeft}),
		
		new Platform({x: 200, y: 300, image: PlatformFloating}),
		new Platform({x: 500, y: 150, image: PlatformFloating}),

		new Platform({x:1350, y:470, image: PlatformMiddle}), 
		new Platform({x: 1350-12, y: 470, image: PlatformRight}),
		new Platform({x: 1350+PlatformMiddle.width, y: 470, image: PlatformLeft}),
	]

	biblos = [
		new Biblo({x:0, y:0, image: Background}),
		new Biblo({x:0, y:0, image: Mountains}),
		new Biblo({x:1500, y:350, image:Flag}),
	]

	kedis = [
		new Kedi({x:450, y:100, image: YouWinCat}),
		new Kedi({x:450, y:100, image: YouLoseCat})
	]


	keys = {
		right: {
			pressed: false
		},
		left: {
			pressed: false
		},
		"space": {
			pressed: false
		}
	}

	scrollOffSet = 0	
}

function animate(){
	requestAnimationFrame(animate)

	c.fillStyle = 'yellow'
	
	c.fillRect(0,0, canvas.width, canvas.height)
	
	biblos.forEach(Biblo => {
		Biblo.draw()
	})
	
	platforms.forEach(platform => {
		platform.draw()
	})
	player.update()

	
	
	

	if (keys.right.pressed && player.position.x < 400){
		player.velocity.x = 5
	} else if(keys.left.pressed && player.position.x>100){
		player.velocity.x = -5
	} else {
		player.velocity.x = 0

		if(keys.right.pressed) {
			scrollOffSet += 5

			platforms.forEach(platform => {
				platform.position.x -= 5
			})

			biblos.forEach(Biblo => {
				if(Biblo.image==Flag)
				Biblo.position.x -= 5
				if(Biblo.image==Mountains)
				Biblo.position.x -= 3
				if(Biblo.image==Background)
				Biblo.position.x -= 2
			})
		}

		else if(keys.left.pressed) {
			scrollOffSet -= 5

			platforms.forEach(platform => {
				platform.position.x += 5
			})

			biblos.forEach(Biblo => {
				if(Biblo.image==Flag)
				Biblo.position.x += 5
				if(Biblo.image==Mountains)
				Biblo.position.x += 3
				if(Biblo.image==Background)
				Biblo.position.x += 2
			})
		}
	}

	

	platforms.forEach(platform => {
	if (player.position.y + player.height <= platform.position.y &&
		player.position.y + player.height + player.velocity.y >= platform.position.y && 
		player.position.x + player.width >= platform.position.x &&
		player.position.x<=platform.position.x + platform.width)
		{
		player.velocity.y = 0
		}
	})

	if (scrollOffSet>1100) {
		//console.log('you win')
		
		kedis.forEach(Kedi => {
			if(Kedi.image==YouWinCat)
			Kedi.draw()
		})
	}

	if (player.position.y>canvas.height){
		//console.log('you lose')
		kedis.forEach(Kedi => {
			if(Kedi.image==YouLoseCat)
			Kedi.draw()
			



		})

		if(keys["space"].pressed){
			init();

		}

		
	}
	
}

animate()

var isJumping = false;
var isGrounded = true;
var doubleJump = true;
var maxJumps = 2;
var jumpsLeft= maxJumps ;

window.addEventListener('keydown', ({keyCode}) => {
	//console.log(keyCode)
	switch(keyCode) {
	case 65:
		//console.log('left')
		if (player.position.y<=canvas.height)
		keys.left.pressed = true
		break
	case 68:
		//console.log('right')
		if (player.position.y<=canvas.height)
		keys.right.pressed = true
		break
	case 87:
		//console.log('up')
		if(player.velocity.y==0){
			jumpsLeft = maxJumps
		}
		if (player.position.y <= canvas.height) {
			if (!isJumping && jumpsLeft>0) {
				player.velocity.y -= 20;
				isJumping = true; // Yükselme durumunu güncelliyoruz
				jumpsLeft--
			}
		}
		
		break
	case 32:
		keys["space"].pressed = true
		break
	}
	console.log(player.velocity.y)

	//console.log(keys.right.pressed)
})

window.addEventListener('keyup', ({keyCode}) => {
	//console.log(keyCode)
	switch(keyCode) {
	case 65:
		//console.log('left')
		keys.left.pressed = false
		break
	case 68:
		//console.log('right')
		keys.right.pressed = false
		break
	case 87:
		//console.log('up')
		isJumping = false
		doubleJump=false
		
		break
	case 32:
		keys["space"].pressed = false
		break
	}
	console.log(player.velocity.y)

	//console.log(keys.right.pressed)
})

console.log(player.velocity.y)





