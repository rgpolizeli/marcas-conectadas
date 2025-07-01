export default function configContactForm(){
    let contactForm = document.querySelector(".form_send_message")
	// Get the modal
	let modal = document.getElementById("myModal")
	let modalContentDiv = document.getElementById("myModalContentDiv")
	
	contactForm.addEventListener("submit", function(ev) {
      ev.preventDefault()
      var data = new FormData(contactForm)
      ajax(contactForm.method, contactForm.action, data, success, error)
    })
  
  // helper function for sending an AJAX request

	  function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function() {
		  if (xhr.readyState !== XMLHttpRequest.DONE) return;
		  if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		  } else {
			error(xhr.status, xhr.response, xhr.responseType);
		  }
		};
		xhr.send(data);
	  }
	
	
	function success() {
      contactForm.reset();
      modalContentDiv.innerHTML = "<p>Mensagem enviada. Agradecemos o seu contato e enviaremos uma resposta no seu e-mail.</p>"
		  modal.style.display = "block"
		  document.body.style.overflow="hidden"
    }

    function error() {
      modalContentDiv.innerHTML = "<p>Desculpe, sua mensagem não foi enviada devido a um erro. Por favor, encaminhe-nos um e-mail para brandingonline@outlook.com ou entre em contato por nossas redes sociais.</p>"
		  modal.style.display = "block"
		  document.body.style.overflow="hidden"
    }
}