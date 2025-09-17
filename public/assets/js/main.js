
import Queue from './components/queue.js'
import { getImages } from './utils.js'

 window.onload = () => {
 	const images = getImages();
 	images.then(assets => {
 		const functions = assets.map(asset => asset.render)
 		const queue = new Queue(functions,100)
 		Promise.resolve().then(() => {
 			const play = queue.render().play()
			setTimeout(() => {	
			  play.stop()
			})
 		})
 	})
 }
