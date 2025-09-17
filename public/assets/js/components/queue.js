import Listener from "./listener.js"

const Queue = function(callbacks,delay){
	this.callbacks = callbacks;
	this.delay = delay;
	this.delayFadeOut = delay * 2;
	this._stop = false;
	const _body = document.body
	// PUBLIC FUNCTION	
	this.play = () => {
		this.button.dispatchEvent(new Event('click'))
		return this
	}

	this.stop = () => {
		// this.button.("dblclick")
		this.button.dispatchEvent(new Event('dblclick'))
		return this;
	}

	this.render = () => {
		_body.innerHTML = `
			<button>Click</button>
			 <p id="name"></p>
			 <div id="printHere"></div>
			`
		const button = document.querySelector('button')
		this.button = button
		this.listener = new Listener(button)
		
		this.listener
			.EventClick(this._click)
			.EventDoubleClick(this._doubleClick)
		return this
	}
	// --- END PUBLIC FUNCTION
	// EVENTS
	this._click = (e) => {
		// console.log (e)
		this._auto()
	}

	this._doubleClick = (e) => {
		console.log(e)
		if(this._start) this._stopAutoPlay()
	}

	this._auto = () => {
		if(this._start) return
		if(!this.callbacksToExec) this.callbacksToExec = this.callbacks;
		this.timeouts = this.callbacksToExec.map((callback,index) => {
			const timerId = setTimeout(() => {	
				callback(this.stop)
				this.id = index
			},index*this.delay)
			return timerId
		})
		this._start = true
	}
	this._stopAutoPlay = () => {
		this.callbacksToExec = this.callbacksToExec.slice(this.id)
		this.timeouts.forEach((timerId) => {
			clearTimeout(timerId)
		} )
		// console.log (this.id)
		this._start = false
	}
}
export default Queue 
