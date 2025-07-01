export default async function load(fileName){
	let str = await fetch("../dynamicContent/" + fileName)
	let result = await str.text()
	return result
}