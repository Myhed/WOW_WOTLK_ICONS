import Listener from "./listener.js"

const Queue = function(callbacks,delay){
	this.callbacks = callbacks;
	this.delay = delay;
	this.delayFadeOut = delay * 2;
	this.stop = false;
	const _body = document.body
	this.click = (e) => {
		this.stopAutoPlay()
	}
	this.doubleClick = () => this.resumeAutoPlay()
	this.render = () => {
		_body.innerHTML = `
			<button>Click</button>
			 <p id="name"></p>
			 <div id="printHere"></div>
			`
		const button = document.querySelector('button')
		this.listener = new Listener(button)
			.EventClick(this.click)
			.EventDoubleClick(this.doubleClick)
		return this
	}
	this.auto = () => {
		if(!this.callbacksToExec) this.callbacksToExec = this.callbacks;
		this.timeouts = this.callbacksToExec.map((callback,index) => {
			const timerId = setTimeout(() => {	
				callback(this.stop)
				this.id = index
			},index*this.delay)
			return timerId
		})
	}
	this.stopAutoPlay = (index) => {
		if(!this.stop){
			this.callbacksToExec = this.callbacksToExec.slice(this.id)
			this.timeouts.forEach((timerId) => clearTimeout(timerId) )
			console.log(this.id)
			this.stop = true
		}
	}
	this.resumeAutoPlay = () => {
		this.auto()
		this.stop = false
	}
}
export default Queue 
