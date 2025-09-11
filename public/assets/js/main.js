
import {getImages} from './utils.js'
import Queue from './components/queue.js'

window.onload = function (){
	const images = getImages();
	console.log('images:', images)
	images.then(assets => {
		const functions = assets.map(asset => asset.render)
		const play = new Queue(functions,100)
		Promise.resolve().then(() => {
			play.render().auto()
		})
	})
}
