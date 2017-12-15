var modal = document.getElementById("contenido");

var activeModal = document.getElementById("activemodal");

var span1 = document.getElementById("cerrar");

activeModal.onclick = function() {
    modal.style.display = "block";
}
span1.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}