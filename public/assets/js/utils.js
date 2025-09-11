
import Asset from './components/asset.js'

const getImages = () => {

let pathImg = 'public/assets/png/'
const images = fetch(pathImg).then(result => result.text()).then(rawText => {
	const imagesId = rawText.match(/"([\w.png]+)"/gm)
	return  imagesId.map((imageId,index) => {
		const urlImg =  pathImg + imageId.replace("\"","").replace("\"","")	
		const name = urlImg.match(/[\w\.png]+$/g)
		  return new Asset(name,urlImg)
		 })

	})
	return images;
}

//	const functions = Array(100).fill(null).map((__,index) => {
//		return function(){
//			console.log(`Hey je suis la fonction ${index}`)
//			const button = document.querySelector('button')
//			const printHere = document.querySelector('#printHere')
//				printHere.innerHTML = `
//				<p style="color:red; width:245px; height: 245px;  background:blue;">${index}</p>`
//		}
//	})

export {getImages}
