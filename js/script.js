var modal = document.querySelector("#modal-mask"),
  modalOverlay = document.querySelector("#dark-background"),
  closeButton = document.querySelector("#close-button"),
  openButton = document.querySelector("#open-button"),
  test = document.querySelector(".slider-list-item:nth-of-type(1)");
console.log(test);
function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}
function openModal() {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
}
