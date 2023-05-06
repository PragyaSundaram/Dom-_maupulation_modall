'use strict';

const modal = document.querySelector('.modal'); //element with class modal .
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnPenModal = document.querySelectorAll('.show-modal');
//console.log(btnPenModal);
//maupulationg classes with JS.
//treating the elemts btmopen as array
const openModal = function () {
  //console.log('Button clicked'); //looping over buttons, addiing      eventlisten  to alll 3 buttons.
  modal.classList.remove('hidden'); //.(dot) was for  selector ,just passing name of class herer
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnPenModal.length; i++)
  btnPenModal[i].addEventListener('click', openModal);
//adding close on model window
//adding function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//adding keyboard modal so that eyboad can close the modal.

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
