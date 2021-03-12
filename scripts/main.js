console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	} 
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();

/*

else if (event.target.id === "showSolid") {
	filterLegos("Solid")
}else if (event.target.id === "showTransparent") {
	filterLegos("Transparent")
}else if (event.target.id === "showPearl") {
	filterLegos("Pearl")
}else if (event.target.id === "showChrome") {
	filterLegos("Chrome")
}else if (event.target.id === "showMetallic") {
	filterLegos("Metallic")
}else if (event.target.id === "showMilky") {
	filterLegos("Milky")
}else if (event.target.id === "showGlitter") {
	filterLegos("Glitter")
}else if (event.target.id === "showSpeckle") {
	filterLegos("Speckle")
}else if (event.target.id === "showInk") {
	filterLegos("Ink")
}else if (event.target.id === "showProcess") {
	filterLegos("Process")
}else if (event.target.id === "showModulex") {
	filterLegos("Modulex")
}
*/