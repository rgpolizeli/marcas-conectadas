export default function configNavBar(){
    let navToggle = document.getElementById('nav_toggle')
	let navToggleIcon = document.getElementById('nav_toggle_icon')
	let navContent = document.getElementById('nav_content');
	
	navToggle.addEventListener('click', function () {
		navContent.classList.toggle('nav_content_active');
	})
	
	navContent.addEventListener('click', function () {
		if(navContent.classList.value.indexOf('nav_content_active')!= -1){
			navContent.classList.toggle('nav_content_active');
		}
	})
}