var modal = document.querySelector("#modal-mask"),
  modalOverlay = document.querySelector("#dark-background"),
  closeButton = document.querySelector("#close-button"),
  openButton = document.querySelector("#open-button");

function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}
function openModal() {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
}
