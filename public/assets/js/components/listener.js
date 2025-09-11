
const Listener = function(element) {
	const HTMLElement = element;
	this.createCustomEvent = (name,body = {}) => {
		return new CustomEvent(name,body)
	}
	this.EventTriggerTimeout = (callback) => {
		HTMLElement.addEventListener('triggertimeout',callback)
		return this;
	}
	this.EventClick = (callback) => {
		HTMLElement.addEventListener('click',callback,false)
		return this;
	}
	this.EventDoubleClick = (callback) => {
		HTMLElement.addEventListener("dblclick",callback)
		return this;
	} 
}

export default Listener
