const Asset = function(name,image) {
	this.name = name;
	this.image = image;
	this.render = (stopAnimate = false) => {
		const printHere = document.querySelector('#printHere')
		const name = document.querySelector('#name');
		console.log('urlImg:', this.image)
		console.log('name:', name)
		name.innerHTML = this.name
		printHere.innerHTML = `<img src=${this.image} />` 

	}
}

export default Asset;
