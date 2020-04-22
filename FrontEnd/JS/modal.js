// Get modal
var modal = document.getElementById('simpleModal')
// Get open modal button
var modalBtn = document.getElementById('modalBtn')
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]
// ^^gets array for elements with ClassName

// Listen for  open click
modalBtn.addEventListener('click', openModal)
// listen for close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', outsideClick)

// function to open modal
function openModal() {
	modal.style.display = 'block';
}

// function to close modal
function closeModal(){
	modal.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e){
	if (e.target == modal) {
	  modal.style.display = 'none';
	}
}
