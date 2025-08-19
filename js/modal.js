import load from "/js/load.js"

export default function configModal(){
	
	// Get the modal
	let modal = document.getElementById("myModal")
	
	let modalContentDiv = document.getElementById("myModalContentDiv")
	
	// Get the button that opens the modal
	let btns = document.getElementsByClassName("card_layout_positive_button")

	// Get the <span> element that closes the modal
	let span = document.getElementsByClassName("close")[0]

	// When the user clicks on the button, open the modal
	
	for(var i=0; i<btns.length; i++){
		btns[i].onclick = async function(event) {
		  let name = event.currentTarget.getAttribute('name')
		  let content = await load(name + ".txt")
		  modalContentDiv.innerHTML = content
		  modal.style.display = "block"
		  document.body.style.overflow="hidden"
		}
	}
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none"
	  document.body.style.overflow="visible"
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target === modal) {
		modal.style.display = "none"
		document.body.style.overflow="visible"
	  }
	}
	
}

